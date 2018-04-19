'use strict';

const connectDao = require('./connectDao');
const constants  = require('../constants')


function create(res,data){
	return connectDao.create(res,data);
}

function getTodos(res,id){
	return connectDao.getTodos(res,id);
}
module.exports={
	create,
	getTodos
}