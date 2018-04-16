const connectRoutr = require("express").Router();
const resHndlr = require("../responseHandler");
const validators=require("./connectValidator");
const middleWare = require("../middleWare");
const connectFacade = require('./connectFacade');


/**
*@ Creating new file upload into system
*/



module.exports = connectRoutr;