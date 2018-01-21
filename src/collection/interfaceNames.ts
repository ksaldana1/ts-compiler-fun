import * as _ from 'lodash';
import * as ts from 'typescript';

function findClientFactoryMembers(root: ts.Node) {
  let found = false;
  let result: ts.InterfaceDeclaration | null = null;
  function find(v: ts.Node) {
    if (v.kind === ts.SyntaxKind.InterfaceDeclaration) {
      const node = v as ts.InterfaceDeclaration;
      if (node.name.escapedText === 'ClientFactory' && !found) {
        found = true;
        result = node;
      }
    }
    v.forEachChild(find);
  }
  find(root);
  return result.members;
}

function filterToMethod(
  nodes: ts.NodeArray<ts.TypeElement>
): ts.MethodSignature[] {
  return nodes.filter(ts.isMethodSignature);
}

function getTypesFromMethod(
  methods: ts.MethodSignature[]
): ts.TypeReferenceNode[] {
  return methods.map(m => m.type).filter(ts.isTypeReferenceNode);
}

function getTypeNamesFromRefNodes(refNodes: ts.TypeReferenceNode[]): string[] {
  return refNodes
    .map(r => r.typeName)
    .filter(ts.isQualifiedName)
    .map(qn => {
      const left = qn.left as ts.Identifier;
      return `${left.escapedText}.${qn.right.escapedText}`;
    });
}

function getInterfacesFromRoot(root: ts.Node): string[] {
  return _.flow(
    findClientFactoryMembers,
    filterToMethod,
    getTypesFromMethod,
    getTypeNamesFromRefNodes
  )(root);
}

export default getInterfacesFromRoot;
