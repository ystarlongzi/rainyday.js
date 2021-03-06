/* jshint node: true */

module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
                ' * <%= pkg.name %> v<%= pkg.version %> by <%= pkg.author.name %>\n' +
                ' * Copyright (c) <%= grunt.template.today("yyyy") %>\n' +
                ' * Licensed under the <%= pkg.license %> license\n' +
                ' */\n',

        jshint:{
            files: ['*.js'],
            options:{
                'browser': true,
                'node': true,
                /*'camelcase': true,*/
                'curly': true,
                'eqeqeq': true,
                'eqnull': true,
                'forin': true,
                'immed': true,
                'indent': 4,
                /*'latedef': true,*/
                'laxbreak': true,
                'laxcomma': true,
                'lastsemic': true,
                'loopfunc': true,
                'noarg': true,
                'newcap': true,
                'plusplus': false,
                'quotmark': 'single',
                'regexp': true,
                'shadow': true,
                'smarttabs': false,
                'strict': false,
                'sub': true,
                'trailing': true,
                'undef': true,
                'unused': true,
                ignores: ['bower_components', 'node_modules']
            }
        },
        uglify:{
            dist:{
                files: {
                    'dist/rainyday.min.js': ['rainyday.js']
                },
                options: {
                    banner: '<%= banner %>',
                    compress: true,
                    mangle: true,
                    preserveComments: false,
                    report: 'min'
                }
            }
        }
    });


    // load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('dist', ['uglify']);
    grunt.registerTask('test', ['jshint']);
};
