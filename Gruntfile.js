module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['src/Food.js', 'src/Block.js', 'src/Snake.js', 'src/World.js', 'src/game.js'],
        dest: 'dist/snacke.js'
      },
      css: {
        src: ['src/css/main.css'],
        dest: 'dist/css/main.css'
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js', 'src/css/*.css'],
        tasks: ['dev-watch'],
        options: {
            interrupt: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('dev-watch', ['concat']);
};
