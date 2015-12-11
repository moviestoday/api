var mime = require('mime'),
    base64 = require('node-base64-image'),
    Promise = require("./utils").promise,
    b64 = module.exports = {};

b64.toBase64 = function(what,opts){
  var options = {string: true}
  var path = opts[what];
  var m_str = mime.lookup(path);
  return new Promise(function(resolve,reject){
      base64.base64encoder(path,options, function (err, file) {
        opts[what] = "data:"+m_str+";base64,"+file;
        resolve(opts);
      });
  });
};
