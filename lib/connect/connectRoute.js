const connectRoutr = require("express").Router();
const resHndlr = require("../responseHandler");
const validators=require("./connectValidator");
const middleWare = require("../middleWare");
const connectFacade = require('./connectFacade');


/**
*@ Creating new file upload into system
*/

connectRoutr.route('/createTable').post((req,res)=>{
	connectFacade.create(res);
		// .then((result)=>{
		// 	resHndlr.sendSuccess(res,result);
		// }).catch((e)=>{
		// 	resHndlr.sendError(res,e)
		// })
})


module.exports = connectRoutr;