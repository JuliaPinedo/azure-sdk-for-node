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
 * @class
 * Initializes a new instance of the GroupAddMemberParameters class.
 * @constructor
 * Request parameters for adding a member to a group.
 *
 * @member {string} url A member object URL, such as
 * "https://graph.windows.net/0b1f9851-1bf0-433f-aec3-cb9272f093dc/directoryObjects/f260bbc4-c254-447b-94cf-293b5ec434dd",
 * where "0b1f9851-1bf0-433f-aec3-cb9272f093dc" is the tenantId and
 * "f260bbc4-c254-447b-94cf-293b5ec434dd" is the objectId of the member (user,
 * application, servicePrincipal, group) to be added.
 *
 */
class GroupAddMemberParameters {
  constructor() {
  }

  /**
   * Defines the metadata of GroupAddMemberParameters
   *
   * @returns {object} metadata of GroupAddMemberParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GroupAddMemberParameters',
      type: {
        name: 'Composite',
        className: 'GroupAddMemberParameters',
        modelProperties: {
          url: {
            required: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GroupAddMemberParameters;