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
 * Update policy input.
 *
 */
class UpdatePolicyInput {
  /**
   * Create a UpdatePolicyInput.
   * @member {object} [properties] The ReplicationProviderSettings.
   * @member {object} [properties.replicationProviderSettings] The
   * ReplicationProviderSettings.
   * @member {string} [properties.replicationProviderSettings.instanceType]
   * Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdatePolicyInput
   *
   * @returns {object} metadata of UpdatePolicyInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdatePolicyInput',
      type: {
        name: 'Composite',
        className: 'UpdatePolicyInput',
        modelProperties: {
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Composite',
              className: 'UpdatePolicyInputProperties'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdatePolicyInput;