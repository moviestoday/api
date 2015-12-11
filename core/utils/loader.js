var Promise = require('bluebird'),
    request = require("request"),
    loader = module.exports = {};

loader.loadDoc = function(opts){
  var url = opts["url"];
  return new Promise(function(resolve,reject){
    request(url,function(err,response,body){
        opts["body"] = body;
        resolve(opts);
    });
  })
}
