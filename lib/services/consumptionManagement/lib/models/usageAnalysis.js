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
 * Class representing a UsageAnalysis.
 * @extends models['Resource']
 */
class UsageAnalysis extends models['Resource'] {
  /**
   * Create a UsageAnalysis.
   * @member {string} [nextLink]
   * @member {array} [columns] Array of columns
   * @member {array} [rows]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UsageAnalysis
   *
   * @returns {object} metadata of UsageAnalysis
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageAnalysis',
      type: {
        name: 'Composite',
        className: 'UsageAnalysis',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            readOnly: true,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'properties.nextLink',
            type: {
              name: 'String'
            }
          },
          columns: {
            required: false,
            serializedName: 'properties.columns',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UsageAnalysisColumnElementType',
                  type: {
                    name: 'Composite',
                    className: 'UsageAnalysisColumn'
                  }
              }
            }
          },
          rows: {
            required: false,
            serializedName: 'properties.rows',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ArrayElementType',
                  type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ObjectElementType',
                        type: {
                          name: 'Object'
                        }
                    }
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UsageAnalysis;