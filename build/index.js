"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const interfaceNames_1 = require("./collection/interfaceNames");
const classClassWithImplementations_1 = require("./generation/classClassWithImplementations");
const ts = require("typescript");
const interfacesToCallInfo_1 = require("./collection/interfacesToCallInfo");
const _ = require("lodash");
const callInfoToClassMethod_1 = require("./generation/callInfoToClassMethod");
// input
const outputFile = ts.createSourceFile('', fs_1.readFileSync('./src/proto-namespaces.ts').toString(), ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
// collection
const interfaces = interfaceNames_1.default(outputFile);
const callInfo = interfacesToCallInfo_1.default(outputFile, interfaces);
console.log(callInfo);
const methods = _.flatMap(callInfo, callInfoToClassMethod_1.default);
console.log(methods);
const c = classClassWithImplementations_1.default('Client', interfaces);
// output
const resultFile = ts.createSourceFile('', '', ts.ScriptTarget.Latest, 
/*setParentNodes*/ false, ts.ScriptKind.TS);
const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
});
const result = printer.printNode(ts.EmitHint.Unspecified, c, resultFile);
console.log(result);
