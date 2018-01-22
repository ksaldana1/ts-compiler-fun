import { readFileSync, writeFileSync } from 'fs';
import * as _ from 'lodash';
import * as ts from 'typescript';
import { combineNodes } from '../utils/ast';

const input = JSON.parse(readFileSync('./src/proto/input.json').toString());

// get package name given root ast
function getPackage(root: any): any {
  return root.nested;
}
function getPackageName(pkg: any): string {
  return _.first(Object.keys(pkg));
}

function getMessages(pkg: any) {
  return _.flatMap(pkg, nested => {
    return Object.values(nested);
  });
}

function transformMessages(models: any[]) {
  return _.map(models[0], (v, k) => {
    return {
      name: k,
      fields: _.map(Object.entries(v.fields), ([fieldName, val]) => {
        return {
          name: fieldName.toString(),
          type: val.type,
        };
      }),
    };
  });
}

const collect = getMessages(getPackage(input));
const messages: any[] = transformMessages(collect);

interface Field {
  name: string;
  type: any;
}

interface Message {
  name: string;
  fields: Field[];
}

function createInterfaceFromMessage(message: Message): ts.InterfaceDeclaration {
  return ts.createInterfaceDeclaration(
    [],
    [ts.createToken(ts.SyntaxKind.ExportKeyword)],
    ts.createIdentifier(message.name),
    [],
    [],
    message.fields.map(m => createPropertyFromField(m))
  );
}

function createPropertyFromField(field: Field): ts.PropertySignature {
  return ts.createPropertySignature(
    [],
    ts.createIdentifier(field.name),
    undefined,
    typeStringToTypeNode(field.type),
    undefined
  );
}

function typeStringToTypeNode(type: string): ts.KeywordTypeNode {
  console.log(type);
  if (type === 'string') {
    return ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword);
  }
  if (type === 'int32') {
    return ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  }
  if (type === 'bool') {
    return ts.createKeywordTypeNode(ts.SyntaxKind.BooleanKeyword);
  }
}

const namespace = ts.createModuleDeclaration(
  [],
  [ts.createToken(ts.SyntaxKind.ExportKeyword)],
  ts.createIdentifier(getPackageName(getPackage(input))),
  ts.createModuleBlock(messages.map(m => createInterfaceFromMessage(m))),
  ts.NodeFlags.Namespace
);

const p = combineNodes([namespace]);
console.log(p);

// writeFileSync(
//   'output.ts',
//   JSON.stringify(transformMessages(getMessages(getPackage(input))))
// );
writeFileSync('output.ts', p.toString());
