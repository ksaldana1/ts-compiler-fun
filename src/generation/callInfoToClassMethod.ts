import { CallInfo } from '../utils/interfaces';
import * as ts from 'typescript';

function callInfoToClassMethod(info: CallInfo): ts.PropertyDeclaration {
  return ts.createProperty(
    [],
    [],
    info.requestName,
    undefined,
    undefined,
    ts.createArrowFunction(
      [],
      [],
      /* parameters */ [
        ts.createParameter(
          [],
          [],
          undefined,
          ts.createIdentifier('req'),
          undefined,
          ts.createTypeReferenceNode(
            ts.createQualifiedName(
              ts.createIdentifier(`${info.requestType.split('.')[0]}`),
              ts.createIdentifier(`${info.requestType.split('.')[1]}`)
            ),
            []
          )
        ),
      ],
      ts.createTypeReferenceNode('Observable', [
        ts.createTypeReferenceNode(
          ts.createQualifiedName(
            ts.createIdentifier(`${info.responseType.split('.')[0]}`),
            ts.createIdentifier(`${info.responseType.split('.')[1]}`)
          ),
          []
        ),
      ]),
      ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      ts.createBlock([
        ts.createReturn(
          ts.createCall(
            ts.createPropertyAccess(
              ts.createIdentifier('Observable'),
              ts.createIdentifier('ajax')
            ),
            [],
            [
              ts.createObjectLiteral([
                ts.createPropertyAssignment(
                  ts.createIdentifier('url'),
                  ts.createTemplateExpression(ts.createTemplateHead(''), [
                    ts.createTemplateSpan(
                      ts.createPropertyAccess(ts.createThis(), 'API'),
                      ts.createTemplateTail(`/inventory/${info.requestName}`)
                    ),
                  ])
                ),
              ]),
            ]
          )
        ),
      ])
    )
  );
}

export default callInfoToClassMethod;
