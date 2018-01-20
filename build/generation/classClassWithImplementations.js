"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
function createClassWithImplementations(className, interfaceImpls) {
    return ts.createClassDeclaration([], [], className, [], [createHeritageImplsFromInterfaces(interfaceImpls)], []);
}
function createHeritageImplsFromInterfaces(interfaceNames) {
    return ts.createHeritageClause(ts.SyntaxKind.ImplementsKeyword, interfaceNames.map(i => {
        return ts.createExpressionWithTypeArguments([], ts.createIdentifier(i));
    }));
}
exports.default = createClassWithImplementations;
