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
 * @class
 * Initializes a new instance of the Server class.
 * @constructor
 * Represents a server.
 *
 * @member {object} [sku] The SKU (pricing tier) of the server.
 *
 * @member {string} [sku.name] The name of the sku, typically, a letter +
 * Number code, e.g. P3.
 *
 * @member {string} [sku.tier] The tier of the particular SKU, e.g. Basic.
 * Possible values include: 'Basic', 'Standard'
 *
 * @member {number} [sku.capacity] The scale up/out capacity, representing
 * server's compute units.
 *
 * @member {string} [sku.size] The size code, to be interpreted by resource as
 * appropriate.
 *
 * @member {string} [sku.family] The family of hardware.
 *
 * @member {string} [administratorLogin] The administrator's login name of a
 * server. Can only be specified when the server is being created (and is
 * required for creation).
 *
 * @member {number} [storageMB] The maximum storage allowed for a server.
 *
 * @member {string} [version] Server version. Possible values include: '5.6',
 * '5.7'
 *
 * @member {string} [sslEnforcement] Enable ssl enforcement or not when connect
 * to server. Possible values include: 'Enabled', 'Disabled'
 *
 * @member {string} [userVisibleState] A state of a server that is visible to
 * user. Possible values include: 'Ready', 'Dropping', 'Disabled'
 *
 * @member {string} [fullyQualifiedDomainName] The fully qualified domain name
 * of a server.
 *
 */
class Server extends models['TrackedResource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Server
   *
   * @returns {object} metadata of Server
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Server',
      type: {
        name: 'Composite',
        className: 'Server',
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
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
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
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'Sku'
            }
          },
          administratorLogin: {
            required: false,
            serializedName: 'properties.administratorLogin',
            type: {
              name: 'String'
            }
          },
          storageMB: {
            required: false,
            serializedName: 'properties.storageMB',
            constraints: {
              InclusiveMinimum: 1024
            },
            type: {
              name: 'Number'
            }
          },
          version: {
            required: false,
            serializedName: 'properties.version',
            type: {
              name: 'String'
            }
          },
          sslEnforcement: {
            required: false,
            serializedName: 'properties.sslEnforcement',
            type: {
              name: 'Enum',
              allowedValues: [ 'Enabled', 'Disabled' ]
            }
          },
          userVisibleState: {
            required: false,
            serializedName: 'properties.userVisibleState',
            type: {
              name: 'String'
            }
          },
          fullyQualifiedDomainName: {
            required: false,
            serializedName: 'properties.fullyQualifiedDomainName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Server;