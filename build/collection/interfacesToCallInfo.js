"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const _ = require("lodash");
function getNamespaceExports(ss) {
    return ss.map(s => s.split('.')[1]);
}
exports.getNamespaceExports = getNamespaceExports;
// given interface names and an ast root, pluck the nodes
function getInterfaceNodesFromNames(root, names) {
    const formattedNames = getNamespaceExports(names);
    const result = [];
    function collect(v) {
        if (v.kind === ts.SyntaxKind.InterfaceDeclaration) {
            const node = v;
            if (_.includes(formattedNames, node.name.text)) {
                result.push(node);
            }
        }
        v.forEachChild(collect);
    }
    collect(root);
    return result;
}
function interfaceDeclarationTransform(node) {
    return node.members.map(methodSignatureToCallInfo);
}
exports.interfaceDeclarationTransform = interfaceDeclarationTransform;
function methodSignatureToCallInfo(signature) {
    function requestNameFromSignature() {
        const requestText = signature.name;
        return requestText.text;
    }
    function requestTypeFromSignature() {
        const callType = signature.type;
        const requestType = signature.parameters[0].type;
        const requestTypeName = requestType.typeName;
        const left = requestTypeName.left;
        return `${left.text}.${requestTypeName.right.text}`;
    }
    function responseTypeFromSignature() {
        const callType = signature.type;
        const returnArgs = callType.typeArguments[0];
        const typeName = returnArgs.typeName;
        const left = typeName.left;
        return `${left.text}.${typeName.right.text},`;
    }
    return {
        requestName: requestNameFromSignature(),
        requestType: requestTypeFromSignature(),
        responseType: responseTypeFromSignature(),
    };
}
function interfacesToCallInfo(root, names) {
    const nodes = getInterfaceNodesFromNames(root, names);
    return nodes.map(interfaceDeclarationTransform);
}
exports.interfacesToCallInfo = interfacesToCallInfo;
exports.default = interfacesToCallInfo;
