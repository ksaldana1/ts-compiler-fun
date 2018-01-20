"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
function syntaxKindToName(kind) {
    return ts.SyntaxKind[kind];
}
exports.syntaxKindToName = syntaxKindToName;
