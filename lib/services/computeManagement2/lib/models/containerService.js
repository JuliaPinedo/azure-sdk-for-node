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
 * Initializes a new instance of the ContainerService class.
 * @constructor
 * Container service.
 *
 * @member {string} [provisioningState] the current deployment or provisioning
 * state, which only appears in the response.
 *
 * @member {object} [orchestratorProfile] Properties of the orchestrator.
 *
 * @member {string} [orchestratorProfile.orchestratorType] The orchestrator to
 * use to manage container service cluster resources. Valid values are Swarm,
 * DCOS, and Custom. Possible values include: 'Swarm', 'DCOS', 'Custom',
 * 'Kubernetes'
 *
 * @member {object} [customProfile] Properties for custom clusters.
 *
 * @member {string} [customProfile.orchestrator] The name of the custom
 * orchestrator to use.
 *
 * @member {object} [servicePrincipalProfile] Properties for cluster service
 * principals.
 *
 * @member {string} [servicePrincipalProfile.clientId] The ID for the service
 * principal.
 *
 * @member {string} [servicePrincipalProfile.secret] The secret password
 * associated with the service principal.
 *
 * @member {object} masterProfile Properties of master agents.
 *
 * @member {number} [masterProfile.count] Number of masters (VMs) in the
 * container service cluster. Allowed values are 1, 3, and 5. The default value
 * is 1.
 *
 * @member {string} [masterProfile.dnsPrefix] DNS prefix to be used to create
 * the FQDN for master.
 *
 * @member {string} [masterProfile.fqdn] FDQN for the master.
 *
 * @member {array} agentPoolProfiles Properties of the agent pool.
 *
 * @member {object} [windowsProfile] Properties of Windows VMs.
 *
 * @member {string} [windowsProfile.adminUsername] The administrator username
 * to use for Windows VMs.
 *
 * @member {string} [windowsProfile.adminPassword] The administrator password
 * to use for Windows VMs.
 *
 * @member {object} linuxProfile Properties of Linux VMs.
 *
 * @member {string} [linuxProfile.adminUsername] The administrator username to
 * use for Linux VMs.
 *
 * @member {object} [linuxProfile.ssh] The ssh key configuration for Linux VMs.
 *
 * @member {array} [linuxProfile.ssh.publicKeys] the list of SSH public keys
 * used to authenticate with Linux-based VMs.
 *
 * @member {object} [diagnosticsProfile] Properties of the diagnostic agent.
 *
 * @member {object} [diagnosticsProfile.vmDiagnostics] Profile for the
 * container service VM diagnostic agent.
 *
 * @member {boolean} [diagnosticsProfile.vmDiagnostics.enabled] Whether the VM
 * diagnostic agent is provisioned on the VM.
 *
 * @member {string} [diagnosticsProfile.vmDiagnostics.storageUri] The URI of
 * the storage account where diagnostics are stored.
 *
 */
class ContainerService extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ContainerService
   *
   * @returns {object} metadata of ContainerService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerService',
      type: {
        name: 'Composite',
        className: 'ContainerService',
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
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          orchestratorProfile: {
            required: false,
            serializedName: 'properties.orchestratorProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceOrchestratorProfile'
            }
          },
          customProfile: {
            required: false,
            serializedName: 'properties.customProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceCustomProfile'
            }
          },
          servicePrincipalProfile: {
            required: false,
            serializedName: 'properties.servicePrincipalProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceServicePrincipalProfile'
            }
          },
          masterProfile: {
            required: true,
            serializedName: 'properties.masterProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceMasterProfile'
            }
          },
          agentPoolProfiles: {
            required: true,
            serializedName: 'properties.agentPoolProfiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContainerServiceAgentPoolProfileElementType',
                  type: {
                    name: 'Composite',
                    className: 'ContainerServiceAgentPoolProfile'
                  }
              }
            }
          },
          windowsProfile: {
            required: false,
            serializedName: 'properties.windowsProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceWindowsProfile'
            }
          },
          linuxProfile: {
            required: true,
            serializedName: 'properties.linuxProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceLinuxProfile'
            }
          },
          diagnosticsProfile: {
            required: false,
            serializedName: 'properties.diagnosticsProfile',
            type: {
              name: 'Composite',
              className: 'ContainerServiceDiagnosticsProfile'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerService;