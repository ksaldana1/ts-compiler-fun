import * as ts from 'typescript';

export function apiProperty(uri: string): ts.ConstructorDeclaration {
  return ts.createConstructor(
    [],
    [],
    [
      ts.createParameter(
        [],
        [
          ts.createToken(ts.SyntaxKind.PrivateKeyword),
          ts.createToken(ts.SyntaxKind.ReadonlyKeyword),
        ],
        undefined,
        'API',
        undefined,
        ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
        undefined
      ),
    ],
    ts.createBlock([])
  );
}
