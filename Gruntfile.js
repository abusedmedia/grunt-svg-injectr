/*
 * grunt-svg-injectr
 * https://github.com/abused/grunt-svg-injectr
 *
 * Copyright (c) 2016 abusedmedia
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    

    // Configuration to be run (and then tested).
    svg_injectr: {
      test_1: {
        options: {
          selector:'svg_load'
        },
        files: [
          {
            src:  'test/*.html',
            dest: 'dest/'
          }
        ]
      }
      
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['svg_injectr:test_1']);

};
