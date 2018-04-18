'use strict';

//========================== Load Modules Start =======================

//========================== Load internal modules ====================
var mongoose = require("mongoose");
var promise = require("bluebird");
var _ = require("lodash");
const pg = require('pg');
let dbOptions = require('../config').cfg.postgres;
var pool = new pg.Pool(dbOptions);


//========================== Load internal modules ====================




function create(res){
   pool.connect((err,client,done)=> {
   	//INSERT INTO notification(senderid,recieverid,sendername) values($1,$2,$3) returning notificationnumber',['sadasdasdd','weqwewqeqwesad','vish']
          client.query('select * from notification',(err,result)=>{
         	 return res.json({responseCode:200,responseMessage:"success",row:result.rows});

         })
       
   })
}



module.exports ={
	create
}