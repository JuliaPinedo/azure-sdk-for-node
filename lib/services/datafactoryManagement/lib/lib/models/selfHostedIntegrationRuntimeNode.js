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
 * Properties of Self-hosted integration runtime node.
 *
 */
class SelfHostedIntegrationRuntimeNode {
  /**
   * Create a SelfHostedIntegrationRuntimeNode.
   * @member {string} [nodeName] Name of the integration runtime node.
   * @member {string} [machineName] Machine name of the integration runtime
   * node.
   * @member {string} [hostServiceUri] URI for the host machine of the
   * integration runtime.
   * @member {string} [status] Status of the integration runtime node. Possible
   * values include: 'NeedRegistration', 'Online', 'Limited', 'Offline',
   * 'Upgrading', 'Initializing', 'InitializeFailed'
   * @member {object} [capabilities] The integration runtime capabilities
   * dictionary
   * @member {string} [versionStatus] Status of the integration runtime node
   * version.
   * @member {string} [version] Version of the integration runtime node.
   * @member {date} [registerTime] The time at which the integration runtime
   * node was registered in ISO8601 format.
   * @member {date} [lastConnectTime] The most recent time at which the
   * integration runtime was connected in ISO8601 format.
   * @member {date} [expiryTime] The time at which the integration runtime will
   * expire in ISO8601 format.
   * @member {date} [lastStartTime] The time the node last started up.
   * @member {date} [lastStopTime] The integration runtime node last stop time.
   * @member {string} [lastUpdateResult] The result of the last integration
   * runtime node update. Possible values include: 'Succeed', 'Fail'
   * @member {date} [lastStartUpdateTime] The last time for the integration
   * runtime node update start.
   * @member {date} [lastEndUpdateTime] The last time for the integration
   * runtime node update end.
   * @member {boolean} [isActiveDispatcher] Indicates whether this node is the
   * active dispatcher for integration runtime requests.
   * @member {number} [concurrentJobsLimit] Maximum concurrent jobs on the
   * integration runtime node.
   * @member {number} [maxConcurrentJobs] The maximum concurrent jobs in this
   * integration runtime.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SelfHostedIntegrationRuntimeNode
   *
   * @returns {object} metadata of SelfHostedIntegrationRuntimeNode
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SelfHostedIntegrationRuntimeNode',
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
        className: 'SelfHostedIntegrationRuntimeNode',
        modelProperties: {
          nodeName: {
            required: false,
            readOnly: true,
            serializedName: 'nodeName',
            type: {
              name: 'String'
            }
          },
          machineName: {
            required: false,
            readOnly: true,
            serializedName: 'machineName',
            type: {
              name: 'String'
            }
          },
          hostServiceUri: {
            required: false,
            readOnly: true,
            serializedName: 'hostServiceUri',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          capabilities: {
            required: false,
            readOnly: true,
            serializedName: 'capabilities',
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
          versionStatus: {
            required: false,
            readOnly: true,
            serializedName: 'versionStatus',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            readOnly: true,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          registerTime: {
            required: false,
            readOnly: true,
            serializedName: 'registerTime',
            type: {
              name: 'DateTime'
            }
          },
          lastConnectTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastConnectTime',
            type: {
              name: 'DateTime'
            }
          },
          expiryTime: {
            required: false,
            readOnly: true,
            serializedName: 'expiryTime',
            type: {
              name: 'DateTime'
            }
          },
          lastStartTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastStartTime',
            type: {
              name: 'DateTime'
            }
          },
          lastStopTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastStopTime',
            type: {
              name: 'DateTime'
            }
          },
          lastUpdateResult: {
            required: false,
            readOnly: true,
            serializedName: 'lastUpdateResult',
            type: {
              name: 'String'
            }
          },
          lastStartUpdateTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastStartUpdateTime',
            type: {
              name: 'DateTime'
            }
          },
          lastEndUpdateTime: {
            required: false,
            readOnly: true,
            serializedName: 'lastEndUpdateTime',
            type: {
              name: 'DateTime'
            }
          },
          isActiveDispatcher: {
            required: false,
            readOnly: true,
            serializedName: 'isActiveDispatcher',
            type: {
              name: 'Boolean'
            }
          },
          concurrentJobsLimit: {
            required: false,
            readOnly: true,
            serializedName: 'concurrentJobsLimit',
            type: {
              name: 'Number'
            }
          },
          maxConcurrentJobs: {
            required: false,
            readOnly: true,
            serializedName: 'maxConcurrentJobs',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SelfHostedIntegrationRuntimeNode;