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
 * An managed database update.
 *
 */
class ManagedDatabaseUpdate {
  /**
   * Create a ManagedDatabaseUpdate.
   * @member {string} [collation] Collation of the managed database.
   * @member {string} [status] Status for the database. Possible values
   * include: 'Online', 'Offline', 'Shutdown', 'Creating', 'Inaccessible'
   * @member {date} [creationDate] Creation date of the database.
   * @member {date} [earliestRestorePoint] Earliest restore point in time for
   * point in time restore.
   * @member {date} [restorePointInTime] Conditional. If createMode is
   * PointInTimeRestore, this value is required. Specifies the point in time
   * (ISO8601 format) of the source database that will be restored to create
   * the new database.
   * @member {string} [defaultSecondaryLocation] Geo paired region.
   * @member {string} [catalogCollation] Collation of the metadata catalog.
   * Possible values include: 'DATABASE_DEFAULT',
   * 'SQL_Latin1_General_CP1_CI_AS'
   * @member {string} [createMode] Managed database create mode.
   * PointInTimeRestore: Create a database by restoring a point in time backup
   * of an existing database. SourceDatabaseName, SourceManagedInstanceName and
   * PointInTime must be specified. RestoreExternalBackup: Create a database by
   * restoring from external backup files. Collation, StorageContainerUri and
   * StorageContainerSasToken must be specified. Possible values include:
   * 'Default', 'RestoreExternalBackup', 'PointInTimeRestore'
   * @member {string} [storageContainerUri] Conditional. If createMode is
   * RestoreExternalBackup, this value is required. Specifies the uri of the
   * storage container where backups for this restore are stored.
   * @member {string} [sourceDatabaseId] The resource identifier of the source
   * database associated with create operation of this database.
   * @member {string} [storageContainerSasToken] Conditional. If createMode is
   * RestoreExternalBackup, this value is required. Specifies the storage
   * container sas token.
   * @member {string} [failoverGroupId] Instance Failover Group resource
   * identifier that this managed database belongs to.
   * @member {object} [tags] Resource tags.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ManagedDatabaseUpdate
   *
   * @returns {object} metadata of ManagedDatabaseUpdate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagedDatabaseUpdate',
      type: {
        name: 'Composite',
        className: 'ManagedDatabaseUpdate',
        modelProperties: {
          collation: {
            required: false,
            serializedName: 'properties.collation',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          creationDate: {
            required: false,
            readOnly: true,
            serializedName: 'properties.creationDate',
            type: {
              name: 'DateTime'
            }
          },
          earliestRestorePoint: {
            required: false,
            readOnly: true,
            serializedName: 'properties.earliestRestorePoint',
            type: {
              name: 'DateTime'
            }
          },
          restorePointInTime: {
            required: false,
            serializedName: 'properties.restorePointInTime',
            type: {
              name: 'DateTime'
            }
          },
          defaultSecondaryLocation: {
            required: false,
            readOnly: true,
            serializedName: 'properties.defaultSecondaryLocation',
            type: {
              name: 'String'
            }
          },
          catalogCollation: {
            required: false,
            serializedName: 'properties.catalogCollation',
            type: {
              name: 'String'
            }
          },
          createMode: {
            required: false,
            serializedName: 'properties.createMode',
            type: {
              name: 'String'
            }
          },
          storageContainerUri: {
            required: false,
            serializedName: 'properties.storageContainerUri',
            type: {
              name: 'String'
            }
          },
          sourceDatabaseId: {
            required: false,
            serializedName: 'properties.sourceDatabaseId',
            type: {
              name: 'String'
            }
          },
          storageContainerSasToken: {
            required: false,
            serializedName: 'properties.storageContainerSasToken',
            type: {
              name: 'String'
            }
          },
          failoverGroupId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.failoverGroupId',
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
          }
        }
      }
    };
  }
}

module.exports = ManagedDatabaseUpdate;