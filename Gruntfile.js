// Generated partially on 2014-11-30 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

// imagemin's dependencies
var pngquant = require('imagemin-pngquant');
var mozjpeg  = require('imagemin-mozjpeg');
var gifsicle = require('imagemin-gifsicle');

// param Cache-Headers S3 storage
var EXPIRE_IN_2030 = new Date('2030');
var TWO_YEAR_CACHE_PERIOD_IN_SEC = 60 * 60 * 24 * 365 * 2;

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    //
    aws: grunt.file.readJSON('grunt-aws.json'),
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      sass: {
        files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    sass: {
      options: {
        debugInfo: false,
        lineNumbers: false,
        loadPath: 'app/_bower_components/foundation/scss'
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      },
      server: {
        options: {
          debugInfo: true,
          lineNumbers: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/_scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/css',
          ext: '.css'
        }]
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/img'],
        patterns: {
          // Fix While usemin won't have full support for revved files. Source => http://blog.rampinteractive.co.uk/angular-ng-src-re-written-revved-images-grunt-usemin/
          html: [
            [/(img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm,
            'Update the HTML that ref revved images'
            ],
            [ /<script.+src=['"]([^"']+)["']/gm,
            'Update the HTML to reference our concat/min/revved script files'
            ],
            [ /<link[^\>]+href=['"]([^"']+)["']/gm,
            'Update the HTML with the new css filenames'
            ],
            [ /<img[^\>]+src=['"]([^"']+)["']/gm,
            'Update the HTML with the new img filenames'
            ],
            [ /data-main\s*=['"]([^"']+)['"]/gm,
            'Update the HTML with data-main tags',
            function (m) { return m.match(/\.js$/) ? m : m + '.js'; },
            function (m) { return m.replace('.js', ''); }
            ],
            [ /data-(?!main).[^=]+=['"]([^'"]+)['"]/gm,
            'Update the HTML with data-* tags'
            ],
            [ /url\(\s*['"]([^"']+)["']\s*\)/gm,
            'Update the HTML with background imgs, case there is some inline style'
            ],
            [ /<a[^\>]+href=['"]([^"']+)["']/gm,
            'Update the HTML with anchors images'
            ],
            [/<input[^\>]+src=['"]([^"']+)["']/gm,
            'Update the HTML with reference in input'
            ]
          ],

          js: [
            [/(img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm,
            'Update the JS to reference our revved images'
            ]
          ],
        },
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      js: ['<%= yeoman.dist %>/js/**/*.js'],
      css: ['<%= yeoman.dist %>/css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          minifyJS: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    responsive_images: {
      options: {
        quality: 85,
        upscale: true,
        sizes: [{
          name: 'xsmall',
          aspectRatio:false,
          width: 140
        },{
          name: 'small',
          width: 360
        },{
          name: 'medium',
          width: 640
        },{
          name: 'large',
          width: 1024
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['img/sources/**/*.{jpg,jpeg,png}'],
          custom_dest: '<%= yeoman.app %>/img/{%= name %}'
        }]
      }
    },
    imagemin: {
      server: {
        options: {
          optimizationLevel: 7,
          progressive: true,
          use: [pngquant(), mozjpeg(), gifsicle()]
        },

        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['img/sources/**/*.{jpg,jpeg,png,gif}'],
          dest: '<%= yeoman.app %>'
        }]
      }
    },
    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
          }, {
          removeUselessStrokeAndFill: false
          }]
        },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            '.gitignore',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/modernizr/modernizr.js',
            '_bower_components/foundation/js/vendor/jquery.js',
            '_bower_components/foundation/js/vendor/jquery.cookie.js',
            '_bower_components/foundation/js/vendor/placeholder.js',
            '_bower_components/foundation/js/vendor/fastclick.js',
            '_bower_components/foundation/js/foundation/foundation.js',
            '_bower_components/foundation/js/foundation/foundation.abide.js',
            '_bower_components/foundation/js/foundation/foundation.accordion.js',
            '_bower_components/foundation/js/foundation/foundation.interchange.js',
            '_bower_components/foundation/js/foundation/foundation.reveal.js',
            '_bower_components/foundation/js/foundation/foundation.topbar.js',
            '_bower_components/swiper/dist/js/swiper.jquery.min.js',
            '_bower_components/swiper/dist/css/swiper.min.css',
            '/_bower_components/fluidbox/jquery.fluidbox.min.js',
            '/_bower_components/fluidbox/css/fluidbox.css',
            '/_bower_components/jquery-vimeothumb/jquery-vimeothumb.min.js',
            'apple-touch-icon-57x57.png',
            'apple-touch-icon-60x60.png',
            'apple-touch-icon-72x72.png',
            'apple-touch-icon-76x76.png',
            'apple-touch-icon-114x114.png',
            'apple-touch-icon-120x120.png',
            'apple-touch-icon-144x144.png',
            'apple-touch-icon-152x152.png',
            'apple-touch-icon-180x180.png',
            'favicon-32x32.png',
            'android-chrome-192x192.png',
            'favicon-96x96.png',
            'favicon-194x194.png',
            'favicon-16x16.png',
            'manifest.json',
            'mstile-144x144.png',
            'android-chrome-144x144.png',
            'android-chrome-36x36.png',
            'android-chrome-48x48.png',
            'android-chrome-72x72.png',
            'android-chrome-96x96.png',
            'apple-touch-icon-precomposed.png',
            'apple-touch-icon.png',
            'browserconfig.xml',
            'favicon.ico',
            'mstile-150x150.png',
            'mstile-310x150.png',
            'mstile-310x310.png',
            'mstile-70x70.png'
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy *img into .tmp directory
      stageImg: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            'img/**/*',
            '!img/sources/**/*',
            ],
          dest: '.tmp'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    filerev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: 'git@github.com:MagazineduWebdesign/MagazineduWebdesign.github.io.git',
          branch: 'master',
          commit: true,
          push: true,
          message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'copy:stageCss',
        'copy:stageImg',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    },
    replace: {
      dist: {
        options: {
          usePrefix: false,
          detail: true,
          patterns: [
            {
              match: '/css/',
              replacement: 'https://s3-eu-west-1.amazonaws.com/mdw-css/'
            },
            {
              match: '/js/',
              replacement: 'https://s3-eu-west-1.amazonaws.com/mdw-js/'
            }
          ]
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      },
    },
    s3: {
      options: {
        accessKeyId: '<%= aws.key %>',
        secretAccessKey: '<%= aws.secret %>',
        bucket: '<%= aws.bucket %>',
        region: 'eu-west-1',
        headers: {
          CacheControl: TWO_YEAR_CACHE_PERIOD_IN_SEC,
          Expires: EXPIRE_IN_2030,
          StorageClass: 'REDUCED_REDUNDANCY'
        },
      },
      distIMG: {
        files: [{
          cwd: '<%= yeoman.dist %>/img',
          src: [
            '**/*',
            '!sources/**/*',
            ]
        }]
      },
      distJS: {
        //override options
        options: {
          bucket: 'mdw-js'
        },
        files: [{
          cwd: '<%= yeoman.dist %>/js',
          src: '**/*'
        }]
      },
      distCSS: {
        //override options
        options: {
          bucket: 'mdw-css'
        },
        files: [{
          cwd: '<%= yeoman.dist %>/css',
          src: '**/*'
        }]
      },
      //upload the sources/ folder and all its files to a different bucket – Glacier Storage Class
      glacier: {
        //override options
        options: {
          bucket: 'mdw-img-source'
        },
        files: [{
          cwd: '<%= yeoman.dist %>/img',
          src: 'sources/**/*'
        }]
      },
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'newer:imagemin:server',
      'responsive_images:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'svgmin',
    'filerev',
    'usemin',
    'replace:dist', //replace static files with s3 path.
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    's3:distIMG',
    's3:distJS',
    's3:distCSS',
    's3:glacier',
    'buildcontrol:dist'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};