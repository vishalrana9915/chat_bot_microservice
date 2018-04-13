//Visit this for jshint -https://github.com/jshint/jshint/blob/4c2d091b7e50ce2681ee48a104578bb969c189ae/examples/.jshintrc#L79
 var requirejsCompileSkip    = require('./Grunt/tasks/requirejs-compile-skip.json');
var pkg                     = require('./package.json');
var buildnumber             = pkg.buildnum;
var buildversion            = 'build_v' + buildnumber;
var buildpath               = 'public/build_v' + buildnumber + '/';
var pub                     = pkg.nextprint.public;  // "public/"
var tmp                     = pkg.nextprint.temp;    // "public/tmp/"
var bld                     = pkg.nextprint.build;   // "public/build/"
var api                     = pkg.nextprint.api;     // "public/api/"
var less                    = pkg.nextprint.less;    // "less-files"
var css                     = pkg.nextprint.css;     // "public/styles/css"
var idx                     = pkg.nextprint.index;   // "public/index.html"
var production              = false;
module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //'uglify',
		//Description: minification
		uglify: {
			tmp: {
				expand: true,
				cwd: tmp,
				src: [
					'**/*.js'
				],
				dest: tmp,
				ext: '.js'
			}
		},
        //clean:post
        jshint: {
            options: {
                  curly: true,
                  eqeqeq: true,
                  eqnull: true,
                  browser: true,
                  node: true, //it will remove errors like require, process is not defined
                  expr: true, // it will remove error like,Expected an assignment or function call and instead saw an expression.
                  eqeqeq: false, // errors like Expected '===' and instead saw '=='.
                  globals: {
                    jQuery: true
                  },
                  esversion: 6 //will process es6 functions
                },
                all: ['server.js','lib/**/*.js','lib/**.js']
                
            },




    });
 
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('default', [
        'uglify' ,
        'jshint' 
  
    ]);
    
  
};