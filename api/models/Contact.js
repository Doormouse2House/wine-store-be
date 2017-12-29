/**
 * Contact.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // Contact name
    name: {
      type: 'string',
      required: true
    },

    position: {
      type: 'string'
    },

    email_address: {
      type: 'email'
    },

    telephone_number: {
      type: 'string'
    },

    producer: {
      model: 'producer'
    }

  }
};

