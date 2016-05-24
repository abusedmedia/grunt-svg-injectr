/*
 * grunt-svg-injectr
 * https://github.com/abused/grunt-svg-injectr
 *
 * Copyright (c) 2015 abusedmedia
 * Licensed under the MIT license.
 */

'use strict';



module.exports = function(grunt) {

  var path = require('path');
  var fs = require('fs');
  var svgInject = require('svg-injectr')

  grunt.registerMultiTask('svg_injectr', 'Inject svg into html files', function() {

    var options = this.options({source:null, selector:'svg_load', removeAttr:false});
    var done = this.async()

    this.files.forEach(function(f) {

      var src = f.src[0];
      options.source = src

      svgInject(options, function(res){
        var dest = path.join(f.dest, src);
        grunt.file.write(dest, res);
        return done()
      })

      
    });
  });

};
