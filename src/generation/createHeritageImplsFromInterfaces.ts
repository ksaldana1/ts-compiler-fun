import * as ts from 'typescript';

function createHeritageImplsFromInterfaces(interfaceNames: string[]): ts.HeritageClause {
  return ts.createHeritageClause(
    ts.SyntaxKind.ImplementsKeyword,
    interfaceNames.map(i => {
      return ts.createExpressionWithTypeArguments([], ts.createIdentifier(i));
    })
  );
}

export default createHeritageImplsFromInterfaces;
