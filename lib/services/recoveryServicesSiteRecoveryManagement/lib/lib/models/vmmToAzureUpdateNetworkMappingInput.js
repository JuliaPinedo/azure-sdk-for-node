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
 * Update network mappings input properties/behaviour specific to vmm to azure.
 *
 * @extends models['FabricSpecificUpdateNetworkMappingInput']
 */
class VmmToAzureUpdateNetworkMappingInput extends models['FabricSpecificUpdateNetworkMappingInput'] {
  /**
   * Create a VmmToAzureUpdateNetworkMappingInput.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VmmToAzureUpdateNetworkMappingInput
   *
   * @returns {object} metadata of VmmToAzureUpdateNetworkMappingInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VmmToAzure',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'FabricSpecificUpdateNetworkMappingInput',
        className: 'VmmToAzureUpdateNetworkMappingInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
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

module.exports = VmmToAzureUpdateNetworkMappingInput;