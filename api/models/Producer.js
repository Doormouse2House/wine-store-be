/**
 * Producer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // Producer name
    name: {
      type: 'string',
      unique: true,
      required: true
    },

    address: {
      type: 'string'
    },

    web_address: {
      type: 'url',
      unique: true
    },

    region: {
      type: 'string',
      required: true
    },

    appellation: {
      type: 'string'
    },

    owner: {
      type: 'string'
    },

    enologist: {
      type: 'string'
    },

    agricultural_lead: {
      type: 'string'
    },

    planted_hectares: {
      type: 'number'
    },

    total_production: {
      type: 'number'
    },

    description: {
      type: 'string'
    }

  }
};

