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




function create(res,data){
   pool.connect((err,client,done)=> {
   client.query('INSERT INTO todos(name,userId,content,dateofasign,assignedby,isactive) values($1,$2,$3,$4,$5,$6) returning isactive',[data.name,data.userId,data.content,data.dateofasign,data.assignedby,true],(err,result)=>{
            console.log(err)
          	if(result)
         	 return res.json({responseCode:200,responseMessage:"success",row:result.rows });
         	else
         	 return res.json({responseCode:200,responseMessage:"success",row: [] });

         })
       
   })
}


function getTodos(res,id){
   pool.connect((err,client,done)=> {
          client.query('select * from todos WHERE userId = $1',[id],(err,result)=>{
            console.log(err)
            if(result)
           return res.json({responseCode:200,responseMessage:"success",row:result.rows });
          else
           return res.json({responseCode:200,responseMessage:"success",row: [] });

         })
       
   })
}


module.exports ={
	create,
  getTodos
}