'use strict';
const gulp = require('gulp');
const imagesmin = require('gulp-imagemin');
const cache = require('gulp-cache');
const size = require('gulp-size');

// 'gulp imagesmin' -- optimizes and caches your images
gulp.task('imagesmin', () =>
  gulp.src('src/assets/images/**/*')
    .pipe(cache(imagesmin([
      imagesmin.gifsicle({interlaced: true}),
      imagesmin.jpegtran({progressive: true}),
      imagesmin.optipng(),
      imagesmin.svgo({plugins: [{cleanupIDs: false}]})
    ])))
    .pipe(gulp.dest('src/assets/imagesmin'))
    .pipe(size({title: 'imagesmin'}))
);
