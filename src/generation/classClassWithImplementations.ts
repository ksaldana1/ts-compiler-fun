import * as ts from 'typescript';

function createClassWithImplementations(
  className: string,
  interfaceImpls: string[]
): ts.ClassDeclaration {
  return ts.createClassDeclaration(
    [],
    [],
    className,
    [],
    [createHeritageFromInterfaces(interfaceImpls)],
    []
  );
}

function createHeritageFromInterfaces(interfaceNames: string[]): ts.HeritageClause {
  return ts.createHeritageClause(
    ts.SyntaxKind.ImplementsKeyword,
    interfaceNames.map(i => {
      return ts.createExpressionWithTypeArguments([], ts.createIdentifier(i));
    })
  );
}

export default createClassWithImplementations;
