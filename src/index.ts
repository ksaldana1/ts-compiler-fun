import { readFileSync, writeFileSync } from 'fs';
import getInterfacesFromRoot from './collection/interfaceNames';
import createHeritageImpls from './generation/classClassWithImplementations';
import ts = require('typescript');
import interfacesToCallInfo from './collection/interfacesToCallInfo';
import * as _ from 'lodash';
import callInfoToClassMethod from './generation/callInfoToClassMethod';

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
// const c = createClassWithImplementations('Client', interfaces);

function create(
  name: string,
  heritage: ts.HeritageClause,
  methods: ts.PropertyDeclaration[]
): ts.ClassDeclaration {
  return ts.createClassDeclaration([], [], name, [], [heritage], methods);
}

const created = create('Client', createHeritageImpls(interfaces), methods);
// output
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
const result = printer.printNode(ts.EmitHint.Unspecified, created, resultFile);

writeFileSync('./test.ts', result.toString());
