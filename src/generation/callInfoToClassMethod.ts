import { CallInfo } from '../utils/interfaces';
import * as ts from 'typescript';

function callInfoToClassMethod(info: CallInfo): ts.PropertyDeclaration {
  const sanitizeResponse = info.responseType.replace(',', '');
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
            ts.createIdentifier(`${sanitizeResponse.split('.')[0]}`),
            ts.createIdentifier(`${sanitizeResponse.split('.')[1]}`)
          ),
          []
        ),
      ]),
      ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
      ts.createBlock([
        ts.createReturn(
          ts.createCall(
            ts.createPropertyAccess(
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
                          ts.createPropertyAccess(
                            ts.createThis(),
                            ts.createIdentifier('API')
                          ),
                          ts.createTemplateTail(`/rpc/${info.requestName}`)
                        ),
                      ])
                    ),
                  ]),
                ]
              ),
              ts.createIdentifier('map')
            ),
            [],
            [
              ts.createArrowFunction(
                [],
                [],
                [
                  ts.createParameter(
                    [],
                    [],
                    undefined,
                    ts.createIdentifier('r')
                  ),
                ],
                undefined,
                ts.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                ts.createAsExpression(
                  ts.createPropertyAccess(
                    ts.createIdentifier('r'),
                    ts.createIdentifier('response')
                  ),
                  ts.createTypeReferenceNode(
                    ts.createQualifiedName(
                      ts.createIdentifier('bff'),
                      ts.createIdentifier(`${sanitizeResponse.split('.')[1]}`)
                    ),
                    []
                  )
                )
              ),
            ]
          )
        ),
      ])
    )
  );
}

export default callInfoToClassMethod;
