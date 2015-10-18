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
    }
};

module.exports = function(grunt) {
    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-requirejs');

    grunt.registerTask('default', ['requirejs']);
};
