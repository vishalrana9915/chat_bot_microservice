'use strict';

//=================================== Load Modules start ===================================

//=================================== Load external modules=================================
const pg = require('pg');
//Import logger
const logger = require("../logger").logger;
// plugin bluebird promise in mongoose
// pg.Promise = require('bluebird');
// const pool = new pg.Pool();
//=================================== Load Modules end =====================================


// Connect to Db
function connectDb(env, callback) {
    // let dbName = env.postgres.dbName;
    // let dbUrl = env.postgres.dbUrl;
    let dbOptions = env.postgres;

    //getting postgres connection
    // let connectionstring = 'postgres://postgres:vinn2771@localhost:5432/vishal'/
    var pool = new pg.Pool(dbOptions);

    pool.connect(function(err,client,done) {
       if(err){
           console.log(err);
           // res.status(400).send(err);
       } 
       else{
        console.log('//************************* Postgre connected**************************//');
         callback();
       }

      

       // client.query('SELECT * FROM notification',function(err,result) {
       //     done(); // closing the connection;
       //     if(err){
       //         console.log(err);
       //         res.status(400).send(err);
       //     }
       //     console.log(result.rows);
       // });
    });
    // if (env.isProd) {
    //     logger.info("configuring db in " + env.TAG + " mode");
    //     dbUrl = dbUrl + dbName;
    // } else {
    //     logger.info("configuring db in " + env.TAG + " mode");
    //     dbUrl = dbUrl + dbName;
    //     // pg.set('debug', true);
    // }

    // logger.info("connecting to -> " + dbUrl);
    // pg.connect(dbUrl, dbOptions);

    // // CONNECTION EVENTS
    // // When successfully connected
    // pg.connection.on('connected', function () {
    //     logger.info('connected to DB', dbName, 'at', dbUrl);
    //     callback();
    // });

    // // If the connection throws an error
    // pg.connection.on('error', function (err) {
    //     logger.info('DB connection error: ' + err);
    //     callback(err);
    // });

    // // When the connection is disconnected
    // pg.connection.on('disconnected', function () {
    //     logger.info('DB connection disconnected');
    //     callback("DB connection disconnected");
    // });
}

module.exports = connectDb;
