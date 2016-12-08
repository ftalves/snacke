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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
};
