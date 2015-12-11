/**
 * Created by Bishaka on 09/12/2015.
 */
var
    Promise = require("bluebird"),
    cinemax = module.exports = {},
    cSoonUrl = "http://centurycinemax.co.ug/?cat=3",
    nShowUrl = "http://centurycinemax.co.ug/?cat=5",
    showTimesUrl = "http://centurycinemax.co.ug/?cat=5",
    loader = require("../utils/utils").loader,
    log = require("../utils/utils").logger,
    cheerio = require("../utils/utils").cheerio,
    stringUtils = require("../utils/utils").stringUtils,
    cinema = "cinemax",
    cleanName = function(name){
        name = name.replace("3D","").replace("2D","").trim()
        var lastChar = name.charAt(name.length-1)+"";
        if(!stringUtils(lastChar).isAlphaNumeric()  ){
            name = name.substring(0,name.length-1).trim()
        }
        return name;
    },
    getTitles = function(opts){
        return new Promise(function(resolve, reject){
            log.debug(">>> Entering cinemax::getTitles()");
            loader.loadDoc(opts).then(function(opts){
                $  = cheerio.load(opts["body"]);
                var
                    querySelector = ".post_title > h3 > a",
                    rawMovies = $(querySelector),
                    movies = []
                ;
                rawMovies.each(function(){
                    var
                        name = $(this).text(),
                        _3D = stringUtils(name).contains("3D")
                    ;
                    name = cleanName(name);
                    movies.push({title:name,_3D:_3D,cinema:cinema,status:opts["status"]||""})
                })
                log.info("Returning : " + JSON.stringify(movies));
                log.debug("<<< Exiting cinemax::getTitles()");
                resolve(movies);
            });
        })
    },
    getShowTimes = function(opts){
        return new Promise(function(resolve, reject){
            log.debug(">>> Entering cinemax::getShowTimes()");
            loader.loadDoc(opts).then(function(opts){
                $  = cheerio.load(opts["body"]);
                //#text-2 > div > p
            });
        })
    }
;

cinemax.getMovies = function(){
    return new Promise(function(gm_resolve,gm_reject){
        log.debug(">>> Entering cinemax::getMovies()");
        getTitles({"url":nShowUrl,"status":"nshow"});
        getTitles({"url":cSoonUrl,"status":"csoon"});
        log.debug("<<< Exiting cinemax::getMovies()");
        gm_resolve();
    })
};
