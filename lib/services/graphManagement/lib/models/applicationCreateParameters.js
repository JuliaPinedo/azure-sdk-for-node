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
 * Initializes a new instance of the ApplicationCreateParameters class.
 * @constructor
 * Request parameters for creating a new application.
 *
 * @member {boolean} availableToOtherTenants Whether the application is
 * available to other tenants.
 *
 * @member {string} displayName The display name of the application.
 *
 * @member {string} [homepage] The home page of the application.
 *
 * @member {array} identifierUris A collection of URIs for the application.
 *
 * @member {array} [replyUrls] A collection of reply URLs for the application.
 *
 * @member {array} [keyCredentials] The list of KeyCredential objects.
 *
 * @member {array} [passwordCredentials] The list of PasswordCredential
 * objects.
 *
 */
class ApplicationCreateParameters {
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationCreateParameters
   *
   * @returns {object} metadata of ApplicationCreateParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationCreateParameters',
      type: {
        name: 'Composite',
        className: 'ApplicationCreateParameters',
        modelProperties: {
          availableToOtherTenants: {
            required: true,
            serializedName: 'availableToOtherTenants',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: true,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          homepage: {
            required: false,
            serializedName: 'homepage',
            type: {
              name: 'String'
            }
          },
          identifierUris: {
            required: true,
            serializedName: 'identifierUris',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          replyUrls: {
            required: false,
            serializedName: 'replyUrls',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          keyCredentials: {
            required: false,
            serializedName: 'keyCredentials',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'KeyCredentialElementType',
                  type: {
                    name: 'Composite',
                    className: 'KeyCredential'
                  }
              }
            }
          },
          passwordCredentials: {
            required: false,
            serializedName: 'passwordCredentials',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PasswordCredentialElementType',
                  type: {
                    name: 'Composite',
                    className: 'PasswordCredential'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationCreateParameters;