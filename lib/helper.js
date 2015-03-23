module.exports.fn = function (inputs, exits, method) {

  require('machinepack-http').sendHttpRequest({
    url: inputs.id ? '/'+inputs.model+'/'+inputs.id : '/'+inputs.model+'/',
    baseUrl: 'http://'+inputs.account+'.timetask.com',
    method: method||'get',
    params: inputs.params||{},
    headers: {
      "Host": "api.myintervals.com",
      "Accept": "application/json",
      'Authorization': "Basic " + new Buffer(inputs.token+":X").toString('base64')
    }
  }).exec({
    // An unexpected error occurred.
    error: function (err){
      return exits.error(err);
    },
    // 404 status code returned from server
    notFound: function (result){
      return exits.error(result);
    },
    // 400 status code returned from server
    badRequest: function (result){
      return exits.error(result);
    },
    // 403 status code returned from server
    forbidden: function (result){
      return exits.error(result);
    },
    // 401 status code returned from server
    unauthorized: function (result){
      return exits.error(result);
    },
    // 5xx status code returned from server (this usually means something went wrong on the other end)
    serverError: function (result){
      return exits.error(result);
    },
    // Unexpected connection error: could not send or receive HTTP request.
    requestFailed: function (){
      return exits.error("error");
    },
    // OK.
    success: function (result){
      var body = JSON.parse(result.body);
      // console.log(body);
      return exits.success(
        inputs.id ? {project: body[inputs.model]} : {projects: body[inputs.model], count: body.listcount}
      );
    }

  });
}
