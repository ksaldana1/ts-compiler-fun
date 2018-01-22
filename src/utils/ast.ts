import * as ts from 'typescript';

export function syntaxKindToName(kind: ts.SyntaxKind) {
  return ts.SyntaxKind[kind];
}

export function combineNodes(nodes: ts.Node[]): string {
  const resultFile = ts.createSourceFile(
    '',
    '',
    ts.ScriptTarget.Latest,
    false,
    ts.ScriptKind.TS
  );
  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
  });

  return nodes.reduce((prev, curr, i) => {
    const printed = printer.printNode(
      ts.EmitHint.Unspecified,
      curr,
      resultFile
    );
    let separator = '\n';
    if (i === 0) {
      separator = '';
    }
    return `${prev}${separator}${printed.toString()}`;
  }, '');
}
