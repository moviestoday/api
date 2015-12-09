var
    http = require('http'),
    express = require('express'),
    compress = require('compression'),
    api = require("./core/api"),
    app = express()
    ;

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.use(compress());
app.use(function(req, res, next) {

    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    next();
});

http.createServer(app).listen(server_port, server_ip_address, function(){
    console.log('Express server listening on port ' + server_port);
});

app.get('/', function (req, res) {
    res.send("Hello World!")
});


app.get('/cinemas', function (req, res) {
    api.getCinemas().then(function(cinemas){
        res.json(cinemas);
    })
});

module.exports = app;