/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Base class for all execution activities.
 *
 * @extends models['Activity']
 */
class ExecutionActivity extends models['Activity'] {
  /**
   * Create a ExecutionActivity.
   * @member {object} [linkedServiceName] Linked service reference.
   * @member {string} [linkedServiceName.referenceName] Reference LinkedService
   * name.
   * @member {object} [linkedServiceName.parameters] Arguments for
   * LinkedService.
   * @member {object} [policy] Activity policy.
   * @member {object} [policy.timeout] Specifies the timeout for the activity
   * to run. The default timeout is 7 days. Type: string (or Expression with
   * resultType string), pattern:
   * ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   * @member {object} [policy.retry] Maximum ordinary retry attempts. Default
   * is 0. Type: integer (or Expression with resultType integer), minimum: 0.
   * @member {number} [policy.retryIntervalInSeconds] Interval between each
   * retry attempt (in seconds). The default is 30 sec.
   * @member {boolean} [policy.secureOutput] When set to true, Output from
   * activity is considered as secure and will not be logged to monitoring.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExecutionActivity
   *
   * @returns {object} metadata of ExecutionActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Execution',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Activity',
        className: 'ExecutionActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'ActivityDependency'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          linkedServiceName: {
            required: false,
            serializedName: 'linkedServiceName',
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          },
          policy: {
            required: false,
            serializedName: 'policy',
            type: {
              name: 'Composite',
              additionalProperties: {
                type: {
                  name: 'Dictionary',
                  value: {
                      required: false,
                      serializedName: 'ObjectElementType',
                      type: {
                        name: 'Object'
                      }
                  }
                }
              },
              className: 'ActivityPolicy'
            }
          }
        }
      }
    };
  }
}

module.exports = ExecutionActivity;