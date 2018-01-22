import * as ts from 'typescript';

function createImports(
  exportName: string,
  path: string
): ts.ImportDeclaration[] {
  const protoExport = ts.createImportDeclaration(
    [],
    [],
    ts.createImportClause(
      undefined,
      ts.createNamedImports([
        ts.createImportSpecifier(undefined, ts.createIdentifier(exportName)),
      ])
    ),
    ts.createLiteral(path)
  );
  const rxImport = ts.createImportDeclaration(
    [],
    [],
    ts.createImportClause(
      undefined,
      ts.createNamedImports([
        ts.createImportSpecifier(undefined, ts.createIdentifier('Observable')),
      ])
    ),
    ts.createLiteral('rxjs/Observable')
  );
  return [protoExport, rxImport];
}

export default createImports;
