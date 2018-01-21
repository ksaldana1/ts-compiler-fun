import { readFileSync, writeFileSync } from 'fs';
import * as _ from 'lodash';
import * as ts from 'typescript';

import getInterfacesFromRoot from './collection/interfaceNames';
import interfacesToCallInfo from './collection/interfacesToCallInfo';
import { createClassDeclaration } from './generation/createClass';
import callInfoToClassMethod from './generation/createClassMethods';
import createHeritage from './generation/createHeritage';
import createImports from './generation/createImports';

// input
const inputFile = ts.createSourceFile(
  '',
  readFileSync('./src/proto-namespaces.ts').toString(),
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);

// collect data from input ast
const interfaces = getInterfacesFromRoot(inputFile);
const callInfo = interfacesToCallInfo(inputFile, interfaces);

// ast node generation for output
const imports = createImports('bff', './src/proto-namespaces');
const classMethods = _.flatMap(callInfo, ci => {
  return ci.map(callInfoToClassMethod);
});

const client = createClassDeclaration(
  'Client',
  'localhost:5555',
  createHeritage(interfaces),
  classMethods
);

function combineNodes(nodes: ts.Node[]): string {
  const resultFile = ts.createSourceFile(
    '',
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  return nodes.reduce((prev, curr, i) => {
    const printed = printer.printNode(
      ts.EmitHint.Unspecified,
      curr,
      resultFile
    );
    let separator = '\n';
    if (i === 0) {
      separator = '';
    }
    return `${prev}${separator}${printed.toString()}`;
  }, '');
}

writeFileSync('./output.ts', combineNodes([...imports, client]));
