import * as ts from 'typescript';

export function createClassDeclaration(
  name: string,
  uri: string,
  heritage: ts.HeritageClause,
  methods: ts.PropertyDeclaration[]
): ts.ClassDeclaration {
  return ts.createClassDeclaration(
    [],
    [ts.createToken(ts.SyntaxKind.ExportKeyword)],
    name,
    [],
    [heritage],
    [apiProperty(uri), ...methods]
  );
}

function apiProperty(uri: string): ts.ConstructorDeclaration {
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
