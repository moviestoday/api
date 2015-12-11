var
    Promise = require("bluebird"),
    crawler = module.exports = {},
    cinemas = { "cinemax":require("./cinemas/cinemax") }
;

crawler.getMovies = function(opts){
    return new Promise(function(gm_resolve,gm_reject){
        var cinema = opts["cinema"] || "n/a";
        if( cinemas[cinema]){
            gm_resolve([]);
        }else{
            gm_resolve([]);
        }
    })
};