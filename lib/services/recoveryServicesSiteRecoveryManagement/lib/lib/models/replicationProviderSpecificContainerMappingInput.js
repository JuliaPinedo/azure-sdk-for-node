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
 * Provider specific input for pairing operations.
 *
 */
class ReplicationProviderSpecificContainerMappingInput {
  /**
   * Create a ReplicationProviderSpecificContainerMappingInput.
   * @member {string} instanceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of ReplicationProviderSpecificContainerMappingInput
   *
   * @returns {object} metadata of ReplicationProviderSpecificContainerMappingInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ReplicationProviderSpecificContainerMappingInput',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'ReplicationProviderSpecificContainerMappingInput',
        className: 'ReplicationProviderSpecificContainerMappingInput',
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

module.exports = ReplicationProviderSpecificContainerMappingInput;