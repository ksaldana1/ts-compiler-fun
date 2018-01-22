import { readFileSync, writeFileSync } from 'fs';
import * as _ from 'lodash';
import * as ts from 'typescript';

import getInterfacesFromRoot from './http/collection/interfaceNames';
import interfacesToCallInfo from './http/collection/interfacesToCallInfo';
import { createClassDeclaration } from './http/generation/createClass';
import callInfoToClassMethod from './http/generation/createClassMethods';
import createHeritage from './http/generation/createHeritage';
import createImports from './http/generation/createImports';
import { combineNodes } from './utils/ast';

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

writeFileSync('./output.ts', combineNodes([...imports, client]));
