'use strict';
const fs = require('fs');
const connectService = require('./connectService');
const async = require('async');
const _ = require('lodash');


function create(res){
	return connectService.create(res);
	
					// .then(result=>result);
}

module.exports =  {
	create
}