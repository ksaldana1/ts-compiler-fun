import { readFileSync } from 'fs';
import getInterfacesFromRoot from './collection/interfaceNames';
import ts = require('typescript');

const outputFile = ts.createSourceFile(
  'ok',
  readFileSync('./src/proto-namespaces.ts').toString(),
  ts.ScriptTarget.Latest,
  false,
  ts.ScriptKind.TS
);

console.log(getInterfacesFromRoot(outputFile));
