"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
function makeFactorialFunction() {
    const functionName = ts.createIdentifier('factorial');
    const paramName = ts.createIdentifier('n');
    const parameter = ts.createParameter(
    /*decorators*/ undefined, 
    /*modifiers*/ undefined, 
    /*dotDotDotToken*/ undefined, paramName);
    const condition = ts.createBinary(paramName, ts.SyntaxKind.LessThanEqualsToken, ts.createLiteral(1));
    const ifBody = ts.createBlock([ts.createReturn(ts.createLiteral(1))], 
    /*multiline*/ true);
    const decrementedArg = ts.createBinary(paramName, ts.SyntaxKind.MinusToken, ts.createLiteral(1));
    const recurse = ts.createBinary(paramName, ts.SyntaxKind.AsteriskToken, ts.createCall(functionName, /*typeArgs*/ undefined, [decrementedArg]));
    const statements = [ts.createIf(condition, ifBody), ts.createReturn(recurse)];
    return ts.createFunctionDeclaration(
    /*decorators*/ undefined, 
    /*modifiers*/ [ts.createToken(ts.SyntaxKind.ExportKeyword)], 
    /*asteriskToken*/ undefined, functionName, 
    /*typeParameters*/ undefined, [parameter], 
    /*returnType*/ ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword), ts.createBlock(statements, /*multiline*/ true));
}
function makeClass() {
    return ts.createClassDeclaration([], [], 'FirstClass', [], [
        ts.createHeritageClause(ts.SyntaxKind.ImplementsKeyword, [
            ts.createExpressionWithTypeArguments([], ts.createIdentifier('Error')),
        ]),
    ], [
        ts.createProperty(undefined, undefined, 'a', undefined, ts.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword), undefined),
        ts.createConstructor(undefined, undefined, [], ts.createBlock([
            ts.createStatement(ts.createBinary(ts.createPropertyAccess(ts.createThis(), 'a'), ts.SyntaxKind.EqualsToken, ts.createLiteral(1))),
        ])),
        ts.createMethod([], [], undefined, 'logDouble', undefined, [], [], undefined, ts.createBlock([
            ts.createStatement(ts.createCall(ts.createPropertyAccess(ts.createIdentifier('console'), 'log'), [], [
                ts.createBinary(ts.createPropertyAccess(ts.createThis(), 'a'), ts.SyntaxKind.AsteriskToken, ts.createLiteral(2)),
            ])),
        ])),
    ]);
}
function makeClient() {
    return ts.createClassDeclaration([], [], 'Client', [], [
        ts.createHeritageClause(ts.SyntaxKind.ImplementsKeyword, [
            ts.createExpressionWithTypeArguments([], ts.createPropertyAccess(ts.createIdentifier('bff'), 'Inventory')),
            ts.createExpressionWithTypeArguments([], ts.createPropertyAccess(ts.createIdentifier('bff'), 'Users')),
        ]),
    ], [
        ts.createProperty([], [
            ts.createToken(ts.SyntaxKind.PrivateKeyword),
            ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ], ts.createIdentifier('API'), undefined, ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword), ts.createLiteral('https://localhost:5555')),
        ts.createProperty([], [], 'createCount', undefined, undefined, ts.createArrowFunction([], [], 
        /* parameters */ [
            ts.createParameter([], [], undefined, ts.createIdentifier('req'), undefined, ts.createTypeReferenceNode(ts.createQualifiedName(ts.createIdentifier('bff'), ts.createIdentifier('createCountRequest')), [])),
        ], ts.createTypeReferenceNode('Observable', [
            ts.createTypeReferenceNode(ts.createQualifiedName(ts.createIdentifier('bff'), ts.createIdentifier('createCountResponse')), []),
        ]), ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken), ts.createBlock([
            ts.createReturn(ts.createCall(ts.createPropertyAccess(ts.createIdentifier('Observable'), ts.createIdentifier('ajax')), [], [
                ts.createObjectLiteral([
                    ts.createPropertyAssignment(ts.createIdentifier('url'), ts.createTemplateExpression(ts.createTemplateHead(''), [
                        ts.createTemplateSpan(ts.createPropertyAccess(ts.createThis(), 'API'), ts.createTemplateTail('/inventory/createCount')),
                    ])),
                ]),
            ])),
        ]))),
    ]);
}
