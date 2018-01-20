import * as ts from 'typescript';
import * as _ from 'lodash';
import { CallInfo } from '../utils/interfaces';

export function getNamespaceExports(ss: string[]): string[] {
  return ss.map(s => s.split('.')[1]);
}

// given interface names and an ast root, pluck the nodes
function getInterfaceNodesFromNames(
  root: ts.Node,
  names: string[]
): ts.InterfaceDeclaration[] {
  const formattedNames = getNamespaceExports(names);
  const result: ts.InterfaceDeclaration[] = [];
  function collect(v: ts.Node) {
    if (v.kind === ts.SyntaxKind.InterfaceDeclaration) {
      const node = v as ts.InterfaceDeclaration;
      if (_.includes(formattedNames, node.name.text)) {
        result.push(node);
      }
    }
    v.forEachChild(collect);
  }
  collect(root);
  return result;
}

export function interfaceDeclarationTransform(node: ts.InterfaceDeclaration): CallInfo[] {
  return node.members.map(methodSignatureToCallInfo);
}

function methodSignatureToCallInfo(signature: ts.MethodSignature): CallInfo {
  function requestNameFromSignature(): string {
    const requestText = signature.name as ts.Identifier;
    return requestText.text;
  }

  function requestTypeFromSignature(): string {
    const callType = signature.type as ts.TypeReferenceNode;
    const requestType = signature.parameters[0].type as ts.TypeReferenceNode;
    const requestTypeName = requestType.typeName as ts.QualifiedName;
    const left = requestTypeName.left as ts.Identifier;
    return `${left.text}.${requestTypeName.right.text}`;
  }

  function responseTypeFromSignature(): string {
    const callType = signature.type as ts.TypeReferenceNode;
    const returnArgs = callType.typeArguments[0] as ts.TypeReferenceNode;
    const typeName = returnArgs.typeName as ts.QualifiedName;
    const left = typeName.left as ts.Identifier;
    return `${left.text}.${typeName.right.text},`;
  }

  return {
    requestName: requestNameFromSignature(),
    requestType: requestTypeFromSignature(),
    responseType: responseTypeFromSignature(),
  };
}

export function interfacesToCallInfo(root: ts.Node, names: string[]): CallInfo[][] {
  const nodes = getInterfaceNodesFromNames(root, names);
  return nodes.map(interfaceDeclarationTransform);
}

export default interfacesToCallInfo;
