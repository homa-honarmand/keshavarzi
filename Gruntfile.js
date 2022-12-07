module.exports = function(grunt) {
    //1. Project configuration.
    grunt.initConfig({
        //pass in options to plugins, references to files, etc
        copy: {
            build: {
                files: [{
                        cwd: 'styles',
                        src: ['common.css', 'profileCart.css', 'compare.css'],
                        dest: 'dist/styles',
                        expand: true
                    },
                    {
                        cwd: 'scripts/',
                        src: ['main.js'],
                        dest: 'dist/scripts/',
                        expand: true,
                    },
                    {
                        cwd: 'scripts/c-removed',
                        src: ['main.js', 'easing.js', 'print.js', 'owl.carousel.min.js', 'ion.rangeSlider.min.js', 'jquery.validate.min.js'],
                        dest: 'dist/scripts/',
                        expand: true,
                    }
                ],


            },
        },
        concat: {

            jscommon: {
                src: [
                    'scripts/c-removed/jquery-3.5.1.min.js',
                    'scripts/c-removed/bootstrap.bundle.min.js',
                    'scripts/c-removed/bootstrap-dropdownhover.js',
                    'scripts/c-removed/jquery.unav.js',
                ],
                dest: 'dist/scripts/common.js',
            },
            jsdetail: {
                src: [
                    'scripts/c-removed/slick.min.js',
                    'scripts/c-removed/elevatezoom.js',
                    'scripts/c-removed/zoom-slick.js',
                    'scripts/c-removed/fancybox.js',
                    'scripts/c-removed/owl.carousel.min.js',
                ],
                dest: 'dist/scripts/detailProduct.js',


            },
            // style

            index: {
                src: [

                    'styles/css/owl.carousel.min.css',
                    'styles/css/owl.theme.default.min.css',
                    'styles/index.css',
                ],
                dest: 'dist/styles/index.css',
            },
            archiveProduct: {
                src: [
                    'styles/css/ion.rangeSlider.min.css',
                    'styles/archive-product.css',
                ],
                dest: 'dist/styles/archiveProduct.css',
            },
            detaileProduct: {
                src: [
                    'styles/css/owl.carousel.min.css',
                    'styles/css/owl.theme.default.min.css',
                    'styles/detail-product.css',
                    'styles/Css/fancybox.css',
                ],
                dest: 'dist/styles/detailProduct.css',
            },

        },


        remove_comments: {
            js: {
                options: {
                    multiline: true,
                    singleline: false,
                    keepSpecialComments: false
                },
                cwd: 'scripts/',
                src: ['*.js', '!main.js'],
                expand: true,
                dest: 'scripts/c-removed',
            },
            css: {
                options: {
                    multiline: false,
                    singleline: false,
                    keepSpecialComments: false,
                    linein: false,
                    isCssLinein: true
                },
                cwd: 'styles/',
                src: '**/*.css',
                expand: true,
                dest: 'styles/new'
            }

        },
        uglify: {
            build: {
                // files: [{
                //         src: 'dist/scripts/common.js',
                //         dest: 'dist/scripts/common.min.js'
                //     }]
                files: [{
                    expand: true,
                    cwd: 'dist/scripts/',
                    src: ['*.js', '!*.min.js', '!main.js'],
                    dest: 'dist/scripts/',
                    ext: '.min.js',
                }, ],
            },
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
                mergeIntoShorthands: false,
                roundingPrecision: -1,
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/styles/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/styles/',
                    ext: '.min.css',
                }, ],
            },
        },

        clean: {
            styles: {
                src: ['styles/new']
            },
            //   scripts: {
            //     src: [ 'build/**/*.js', '!build/application.js' ]
            //   },
        },
    });

    //2.load plugins
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-remove-comments');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //3.register tasks
    //example
    //grunt.registerTask('run',function(){
    //
    // });
    // Default task(s).
    grunt.registerTask('copy-styles', ['copy']);
    grunt.registerTask('un-css', ['uncss']);
    grunt.registerTask('pure-css', ['purifycss']);
    grunt.registerTask('comment', ['remove_comments']);
    grunt.registerTask('clean-styles', ['clean']);
    grunt.registerTask('concat-files', ['concat']);
    grunt.registerTask('concat-css', ['concat']);
    grunt.registerTask('uglify-js', ['uglify']);
    grunt.registerTask('uglify-css', ['cssmin']);
    grunt.registerTask('all', [

        'comment',
        'copy-styles',
        'concat-files',
        'uglify-js',
        'uglify-css',
        'clean-styles',


    ]);
    //code : grunt all
};