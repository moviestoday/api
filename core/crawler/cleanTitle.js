/**
 * Created by Bishaka on 11/12/2015.
 */
var
    Promise = require("bluebird"),
    loader = require("../utils/utils").loader,
    log = require("../utils/utils").logger,
    cheerio = require("../utils/utils").cheerio,
    stringUtils = require("../utils/utils").stringUtils,
    urlHead = "http://www.imdb.com/find?ref_=nv_sr_fn&q=",
    urlTail = "&s=tt",
    //qString = "#main > div > div.findSection > table > tbody > tr:nth-child(1) > td.result_text > a",
    qString = "#main > div > div.findSection > table > tr:nth-child(1) > td.result_text > a",
    _gut = module.exports = {}
;

_gut.cleanTitle = function(opts){
    return new Promise(function(resolve, reject){
        log.debug(">>> Entering cleanTitle::cleanTitle");
        var
            title = opts["title"] || ""
        ;
        log.debug("Recieved : " + title);
        if(title){
            var url = urlHead+title+urlTail;
            loader.loadDoc({url:url}).then(function(res){
                $  = cheerio.load(res["body"]);
                opts["title"]=$(qString).text();
                log.debug("Returning : " + opts["title"]);
                log.debug("<<< Exiting cleanTitle::cleanTitle");
                resolve(opts);
            })
        }else{
            opts["title"] = title;
            log.debug("Returning : " + opts["title"]);
            log.debug("<<< Exiting cleanTitle::cleanTitle");
            resolve(opts);
        }

    });
};
