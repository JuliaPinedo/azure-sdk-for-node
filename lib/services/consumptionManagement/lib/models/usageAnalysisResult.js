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
 * Result of listing usages. It contains all columns listed under groupings and
 * aggregation.
 */
class UsageAnalysisResult extends Array {
  /**
   * Create a UsageAnalysisResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of UsageAnalysisResult
   *
   * @returns {object} metadata of UsageAnalysisResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UsageAnalysisResult',
      type: {
        name: 'Composite',
        className: 'UsageAnalysisResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UsageAnalysisElementType',
                  type: {
                    name: 'Composite',
                    className: 'UsageAnalysis'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UsageAnalysisResult;