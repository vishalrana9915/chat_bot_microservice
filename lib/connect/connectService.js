'use strict';

const connectDao = require('./connectDao');
const constants  = require('../constants')


function create(res){
	return connectDao.create(res);
			// .then((result)=>{
			// 	console.log("result")
			// 	console.log(result)
			// 	result});
}

module.exports={
	create
}