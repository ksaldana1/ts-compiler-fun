"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const _ = require("lodash");
function findClientFactoryMembers(root) {
    let found = false;
    let result = null;
    function find(v) {
        if (v.kind === ts.SyntaxKind.InterfaceDeclaration) {
            const node = v;
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
function filterToMethod(nodes) {
    return nodes.filter(ts.isMethodSignature);
}
function getTypesFromMethod(methods) {
    return methods.map(m => m.type).filter(ts.isTypeReferenceNode);
}
function getTypeNamesFromRefNodes(refNodes) {
    return refNodes
        .map(r => r.typeName)
        .filter(ts.isQualifiedName)
        .map(qn => {
        const left = qn.left;
        return `${left.escapedText}.${qn.right.escapedText}`;
    });
}
function getInterfacesFromRoot(root) {
    return _.flow(findClientFactoryMembers, filterToMethod, getTypesFromMethod, getTypeNamesFromRefNodes)(root);
}
exports.default = getInterfacesFromRoot;
