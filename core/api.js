var
    Promise = require("bluebird"),
    api = module.exports = {}
;

api.getCinemas = function(){
    return new Promise(function(resolve, reject){
        var cinemas = [
            {"id":"1",codename:"cinemax","name":"Century Cinemax","location":{ "name":"Acacia Mall" }},
            {"id":"2",codename:"cinemagic","name":"3D Cinema Magic","location":{ "name":"Metroplex Mall" }}
        ];
        resolve(cinemas);
    })
};