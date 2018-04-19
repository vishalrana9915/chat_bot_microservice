'use strict';
const fs = require('fs');
const connectService = require('./connectService');
const async = require('async');
const _ = require('lodash');


function create(res,data){
	return connectService.create(res,data);
	
					// .then(result=>result);
}


function getTodos(res,id){
	return connectService.getTodos(res,id);
}


module.exports =  {
	create,
	getTodos
}