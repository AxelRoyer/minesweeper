module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: "src/styles/*.scss",
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "src/styles/style.css" : "src/styles/style.scss"
                }
            }
        },
        jasmine: {
            pivotal: {
                src: 'src/*/*.js',
                options: {
                    specs: 'tests/spec/*.js',
                    keepRunner: true,
                    outfile: 'tests/tests.html',
                    vendor: 'src/utils.js',
                    helper: 'src/utils.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', 'watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('sass-watch', ['watch']);
    grunt.registerTask('sass-build', ['sass']);
    grunt.registerTask('tests', ['jasmine']);
};
