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

/**
 * Details of the organization administrator of the certificate issuer.
 *
 */
class AdministratorDetails {
  /**
   * Create a AdministratorDetails.
   * @member {string} [firstName] First name.
   * @member {string} [lastName] Last name.
   * @member {string} [emailAddress] Email addresss.
   * @member {string} [phone] Phone number.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AdministratorDetails
   *
   * @returns {object} metadata of AdministratorDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AdministratorDetails',
      type: {
        name: 'Composite',
        className: 'AdministratorDetails',
        modelProperties: {
          firstName: {
            required: false,
            serializedName: 'first_name',
            type: {
              name: 'String'
            }
          },
          lastName: {
            required: false,
            serializedName: 'last_name',
            type: {
              name: 'String'
            }
          },
          emailAddress: {
            required: false,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          phone: {
            required: false,
            serializedName: 'phone',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AdministratorDetails;