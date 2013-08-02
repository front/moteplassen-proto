module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),

    watch: {
      // options: {
      //   livereload: 9001
      // },

        options: {
          livereload: true,
        },


      sass: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['compass:dev'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['stylesheets/{,**/}*.css']
      }
    },    

    compass: {
      options: {
        config: 'config.rb'
        // bundleExec: true
      },
      dev: {
        options: {
          environment: 'development'
        }
      },
      dist: {
        options: {
          environment: 'production',
          outputStyle: 'compressed',
          cssDir: 'css'
          // imagesDir: 'images-min',
          // force: true
        }
      }
    }

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // }
  });

  // Load the plugins.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};