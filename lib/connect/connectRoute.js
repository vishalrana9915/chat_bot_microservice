const connectRoutr = require("express").Router();
const resHndlr = require("../responseHandler");
const validators=require("./connectValidator");
const middleWare = require("../middleWare");
const connectFacade = require('./connectFacade');


/**
*@ Creating new file upload into system
*/

connectRoutr.route('/createTable').post((req,res)=>{
	console.log(req.body)
	connectFacade.create(res,req.body);
});


connectRoutr.route('/getTodos').get((req,res)=>{
	console.log(req.query.cusID)
	connectFacade.getTodos(res,req.query.cusID);
});

module.exports = connectRoutr;