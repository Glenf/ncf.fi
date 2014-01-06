module.exports = function(grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        sass : {
            dist : {
                options : {
                    style : 'compressed',
                    banner : '/********************\\\n* <%= pkg.name %>\n* Build date: <%= grunt.template.today("yyyy-mm-dd") %>\n\\********************/\n',
                },
                files : {
                    'build/css/ncffi.css' : 'src/_scss/ncffi.scss'
                }
            },
            dev : {
                options : {
                    style : 'nested',
                    sourcemap : 'true'
                },
                files : {
                    'build/css/ncffi.css' : 'src/_scss/ncffi.scss'
                }
            }
        },

        watch : {
            sass : {
                files : 'src/_scss/**/*.scss',
                tasks : ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task
    grunt.registerTask('default', ['sass:dist']);

};
