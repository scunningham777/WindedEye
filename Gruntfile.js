var config = {
    requirejs: {
        compile: {
            options: {
                mainConfigFile: 'app/config.js',
                name: 'config',
                out: 'app/winded-eye.js',
                optimize: 'uglify2',
                wrap: false,
                preserveLicenseComments: false,
                almond: true
            }
        }
    },
    wiredep: {
        task: {
            src: ['views/**/*.ejs'],
            options: {}
        }
    }
};

module.exports = function(grunt) {
    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.registerTask('default', ['requirejs']);
};
