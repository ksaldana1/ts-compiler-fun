import { readFileSync, writeFileSync } from 'fs';
import getInterfacesFromRoot from './collection/interfaceNames';
import createHeritageImpls from './generation/createHeritageImplsFromInterfaces';
import ts = require('typescript');
import interfacesToCallInfo from './collection/interfacesToCallInfo';
import * as _ from 'lodash';
import callInfoToClassMethod from './generation/callInfoToClassMethod';
import { apiProperty } from './generation/createConstructor';
import createImports from './generation/createImports';

// input
const outputFile = ts.createSourceFile(
  '',
  readFileSync('./src/proto-namespaces.ts').toString(),
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);

// collection
const interfaces = getInterfacesFromRoot(outputFile);
const callInfos = interfacesToCallInfo(outputFile, interfaces);
const methodsMatrix = _.map(callInfos, callInfo => {
  return callInfo.map(callInfoToClassMethod);
});
const methods = _.flatten(methodsMatrix);

// generate new AST
function createClassDeclaration(
  name: string,
  uri: string,
  heritage: ts.HeritageClause,
  methods: ts.PropertyDeclaration[]
): ts.ClassDeclaration {
  return ts.createClassDeclaration(
    [],
    [ts.createToken(ts.SyntaxKind.ExportKeyword)],
    name,
    [],
    [heritage],
    [apiProperty(uri), ...methods]
  );
}
const client = createClassDeclaration(
  'Client',
  'localhost:5555',
  createHeritageImpls(interfaces),
  methods
);
const imports = createImports('bff', './src/proto-namespaces');

const resultFile = ts.createSourceFile(
  '',
  '',
  ts.ScriptTarget.Latest,
  /*setParentNodes*/ false,
  ts.ScriptKind.TS
);

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
});

function createImportGeneration(imports: ts.ImportDeclaration[]): string {
  return imports.reduce((prev, curr, i) => {
    const printed = printer.printNode(ts.EmitHint.Unspecified, curr, resultFile);
    let separator = '\n';
    if (i === 0) {
      separator = '';
    }
    return `${prev}${separator}${printed.toString()}`;
  }, '');
}

const classGeneration = printer.printNode(ts.EmitHint.Unspecified, client, resultFile);

// feels hacky
// how do I add disparate nodes to a root AST?
writeFileSync(
  './test.ts',
  `${createImportGeneration(imports)}\n${classGeneration.toString()}`
);
