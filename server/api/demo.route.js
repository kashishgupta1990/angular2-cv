"use strict";

var Joi = require('joi');

//Routs Lists
module.exports = [
  {
    path: '/api/v1/demo',
    method: ['GET'],
    handler: (request, reply)=> {
      reply({
        status: true,
        message: 'Success',
        data: {}
      });
    }

  }
];
