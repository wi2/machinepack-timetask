module.exports = {


  friendlyName: 'Get',
  description: 'List all or one (project, client, person, ...)',
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
    id: {
      example: 125031,
      description: 'id of the model',
      required: false
    },
    params: {
      example: {search: 'atelier'},
      description: 'params object for filtering',
      required: false
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
    require('../lib/helper.js').fn(inputs, exits);
  },

};
