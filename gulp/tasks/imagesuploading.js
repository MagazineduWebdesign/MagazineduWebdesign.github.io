'use strict';
const fs = require('fs');
const gulp = require('gulp');
const parallelize = require('concurrent-transform');
const awspublish = require('gulp-awspublish');

// 'gulp imagesupload' -- reads from your AWS Credentials file, creates the correct
// headers for your files and uploads them to S3
gulp.task('imagesupload', () => {
  var credentials = JSON.parse(fs.readFileSync('aws-credentials.json', 'utf8'));
  var publisher = awspublish.create(credentials);

  var headers = {
    'Cache-Control': 'max-age=315360000, no-transform, public',
    'Expires': new Date('2030')
  };

  return gulp.src('src/assets/imagesresize/**/*', {dot: true})
    .pipe(awspublish.gzip())
    .pipe(parallelize(publisher.publish(headers), 30))
    .pipe(publisher.cache())
    .pipe(publisher.sync())
    .pipe(awspublish.reporter());
});
