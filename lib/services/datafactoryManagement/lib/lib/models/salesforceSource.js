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
 * A copy activity Salesforce source.
 *
 * @extends models['CopySource']
 */
class SalesforceSource extends models['CopySource'] {
  /**
   * Create a SalesforceSource.
   * @member {object} [query] Database query. Type: string (or Expression with
   * resultType string).
   * @member {string} [readBehavior] The read behavior for the operation.
   * Default is Query. Possible values include: 'Query', 'QueryAll'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SalesforceSource
   *
   * @returns {object} metadata of SalesforceSource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SalesforceSource',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CopySource',
        className: 'SalesforceSource',
        modelProperties: {
          sourceRetryCount: {
            required: false,
            serializedName: 'sourceRetryCount',
            type: {
              name: 'Object'
            }
          },
          sourceRetryWait: {
            required: false,
            serializedName: 'sourceRetryWait',
            type: {
              name: 'Object'
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
          query: {
            required: false,
            serializedName: 'query',
            type: {
              name: 'Object'
            }
          },
          readBehavior: {
            required: false,
            serializedName: 'readBehavior',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SalesforceSource;