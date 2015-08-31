/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    backstop: {
      setup: {
          options : {
              backstop_path: './bower_components/backstopjs',
              test_path: './tests',
              setup: false,
              configure: true
          }
      },
      test: {
          options : {
              backstop_path: './bower_components/backstopjs',
              test_path: './tests',
              create_references: false,
              run_tests: true
          }
      },
      reference: {
          options : {
              backstop_path: './bower_components/backstopjs',
              test_path: './tests',
              create_references: true,
              run_tests: false
          }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-backstop');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit','grunt-backstop']) ;

};
