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
 * Hyper-V Replica specific policy Input.
 *
 * @extends models['PolicyProviderSpecificInput']
 */
class HyperVReplicaPolicyInput extends models['PolicyProviderSpecificInput'] {
  /**
   * Create a HyperVReplicaPolicyInput.
   * @member {number} [recoveryPoints] A value indicating the number of
   * recovery points.
   * @member {number} [applicationConsistentSnapshotFrequencyInHours] A value
   * indicating the application consistent frequency.
   * @member {string} [compression] A value indicating whether compression has
   * to be enabled.
   * @member {string} [initialReplicationMethod] A value indicating whether IR
   * is online.
   * @member {string} [onlineReplicationStartTime] A value indicating the
   * online IR start time.
   * @member {string} [offlineReplicationImportPath] A value indicating the
   * offline IR import path.
   * @member {string} [offlineReplicationExportPath] A value indicating the
   * offline IR export path.
   * @member {number} [replicationPort] A value indicating the recovery HTTPS
   * port.
   * @member {number} [allowedAuthenticationType] A value indicating the
   * authentication type.
   * @member {string} [replicaDeletion] A value indicating whether the VM has
   * to be auto deleted.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HyperVReplicaPolicyInput
   *
   * @returns {object} metadata of HyperVReplicaPolicyInput
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HyperVReplica2012',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'instanceType',
          clientName: 'instanceType'
        },
        uberParent: 'PolicyProviderSpecificInput',
        className: 'HyperVReplicaPolicyInput',
        modelProperties: {
          instanceType: {
            required: true,
            serializedName: 'instanceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          recoveryPoints: {
            required: false,
            serializedName: 'recoveryPoints',
            type: {
              name: 'Number'
            }
          },
          applicationConsistentSnapshotFrequencyInHours: {
            required: false,
            serializedName: 'applicationConsistentSnapshotFrequencyInHours',
            type: {
              name: 'Number'
            }
          },
          compression: {
            required: false,
            serializedName: 'compression',
            type: {
              name: 'String'
            }
          },
          initialReplicationMethod: {
            required: false,
            serializedName: 'initialReplicationMethod',
            type: {
              name: 'String'
            }
          },
          onlineReplicationStartTime: {
            required: false,
            serializedName: 'onlineReplicationStartTime',
            type: {
              name: 'String'
            }
          },
          offlineReplicationImportPath: {
            required: false,
            serializedName: 'offlineReplicationImportPath',
            type: {
              name: 'String'
            }
          },
          offlineReplicationExportPath: {
            required: false,
            serializedName: 'offlineReplicationExportPath',
            type: {
              name: 'String'
            }
          },
          replicationPort: {
            required: false,
            serializedName: 'replicationPort',
            type: {
              name: 'Number'
            }
          },
          allowedAuthenticationType: {
            required: false,
            serializedName: 'allowedAuthenticationType',
            type: {
              name: 'Number'
            }
          },
          replicaDeletion: {
            required: false,
            serializedName: 'replicaDeletion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HyperVReplicaPolicyInput;