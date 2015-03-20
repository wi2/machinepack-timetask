module.exports = {

  friendlyName: 'Remove',
  description: 'Remove (project, task, time,...)',
  extendedDescription: '',

  inputs: {
    account: {
      example: 'myaccount',
      description: 'account name',
      required: true
    },
    token: {
      example: 'gfg12DF',
      description: 'your token',
      required: true
    },
    model: {
      example: 'project',
      description: "name of the model",
      required: true
    },
    params: {
      example: {name: 'Mon Atelier'},
      description: 'params object',
      required: true
    },
    id: {
      example: 125031,
      description: 'id of the model',
      required: true
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Unexpected error occurred.',
    },
    success: {
      description: 'Done.',
    },
  },

  fn: function (inputs,exits) {
    require('../lib/helper.js').fn(inputs, exits, 'delete');
  },

};
