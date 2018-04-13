'use strict';

//===============================Load Modules Start========================

const express = require("express"),
    bodyParser = require("body-parser"),//parses information from POST
    methodOverride = require('method-override');//used to manipulate POST
    const morgan = require('morgan');
const config = require('./index');




/* Another way of implmenting swagger
*
*   const swaggerTools = require('swagger-tools');
*   const YAML = require("yamljs");
*   const swaggerDoc = YAML.load('swagger/openapi.yaml')
*   swaggerTools.initializeMiddleware(swaggerDoc,(middleware)=>{
*        app.use(middleware.swaggerUi())
*    })
*
*/


module.exports = function (app,env) {
    // parses application/json bodies
    app.use(bodyParser.json());
    // parses application/x-www-form-urlencoded bodies
    // use queryString lib to parse urlencoded bodies
    app.use(bodyParser.urlencoded({extended: false,limit:'500mb'}));
    app.use(morgan('dev'));
    app.get('/', function(req, res) {
        console.log("hello=============>>>>>>>>>>>>>>"+process.cwd())
            return res.sendFile(process.cwd()+'/page_404.html');
    });
    app.use(methodOverride(function(req, res){
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            var method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));
    /*For swagger ui*/
     // app.use('/apiDocs', express.static(app.locals.rootDir + '/api/dist'));
    // app.use("/images",express.static(app.locals.rootDir + '/uploads'));
    // app.use("/banners",express.static(app.locals.rootDir + '/uploads'));
    app.use(function(req, res, next) {
        //res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Credentials', true);
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization,accessToken," +
            "lat lng,app_version,platform,ios_version,countryISO,Authorization");
        res.setHeader('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS');
        next();
    });


};
