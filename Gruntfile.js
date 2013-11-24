module.exports = function(grunt) {

    grunt.initConfig({

        sass : {
            dist : {
                files : {
                    'build/css/ncffi.css' : 'src/_scss/ncffi.scss'
                }
            }
        }
    });

    // 
    grunt.loadNpmTasks('grunt-contrib-sass');
    //


    // Default task
    grunt.registerTask('default', ['sass']);

};
