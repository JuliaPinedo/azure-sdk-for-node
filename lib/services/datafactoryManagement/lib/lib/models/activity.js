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
 * A pipeline activity.
 *
 */
class Activity {
  /**
   * Create a Activity.
   * @member {string} name Activity name.
   * @member {string} [description] Activity description.
   * @member {array} [dependsOn] Activity depends on condition.
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Activity
   *
   * @returns {object} metadata of Activity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Activity',
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
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Activity',
        className: 'Activity',
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
          }
        }
      }
    };
  }
}

module.exports = Activity;