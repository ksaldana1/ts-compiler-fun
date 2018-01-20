import { readFileSync } from 'fs';
import getInterfacesFromRoot from './collection/interfaceNames';
import createClassWithImplementations from './generation/classClassWithImplementations';
import ts = require('typescript');

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
const c = createClassWithImplementations('Client', interfaces);

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
const result = printer.printNode(ts.EmitHint.Unspecified, c, resultFile);

console.log(result);
