'use strict';
const gulp = require('gulp');
const responsive = require('gulp-responsive');
const debug = require('gulp-debug');
const changed = require('gulp-changed');

var imgSrc = 'src/assets/imagesmin/**/*.{jpg,png}';

// 'gulp imagesresizelarge' -- resizes all images to 1024 pixels wide and caches your images
gulp.task('imagesresizelarge', () =>
  gulp.src(imgSrc)
    .pipe(changed('src/assets/imagesresize/large'))
    .pipe(responsive({
      // Resize all images to 1024 pixels wide
      '*': {
        width: 1024,
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 7,
      // Strip all metadata
      withMetadata: false,
      // There will be unused configurations for not updated files
      errorOnUnusedConfig: false,
      // Doesn't emit the error when image is not used
      errorOnUnusedImage: false,
      // Keep unmatched images in the stream
      passThroughUnused: false,
      // Disable the use of chroma subsampling with JPEG output (4:4:4)
      withoutChromaSubsampling: true,
      // Doesn't emit the error when image is enlarged
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('src/assets/imagesresize/large'))
);
// 'gulp imagesresizemedium' -- resizes all images to 640 pixels wide and caches your images
gulp.task('imagesresizemedium', () =>
  gulp.src(imgSrc)
    .pipe(changed('src/assets/imagesresize/medium'))
    .pipe(responsive({
      // Resize all images to 640 pixels wide
      '*': {
        width: 640,
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 7,
      // Strip all metadata
      withMetadata: false,
      // There will be unused configurations for not updated files
      errorOnUnusedConfig: false,
      // Doesn't emit the error when image is not used
      errorOnUnusedImage: false,
      // Keep unmatched images in the stream
      passThroughUnused: false,
      // Disable the use of chroma subsampling with JPEG output (4:4:4)
      withoutChromaSubsampling: true,
      // Doesn't emit the error when image is enlarged
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('src/assets/imagesresize/medium'))
);
// 'gulp imagesresizesmall' -- resizes all images to 360 pixels wide and caches your images
gulp.task('imagesresizesmall', () =>
  gulp.src(imgSrc)
    .pipe(changed('src/assets/imagesresize/small'))
    .pipe(responsive({
      // Resize all images to 360 pixels wide
      '*': {
        width: 360,
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 7,
      // Strip all metadata
      withMetadata: false,
      // There will be unused configurations for not updated files
      errorOnUnusedConfig: false,
      // Doesn't emit the error when image is not used
      errorOnUnusedImage: false,
      // Keep unmatched images in the stream
      passThroughUnused: false,
      // Disable the use of chroma subsampling with JPEG output (4:4:4)
      withoutChromaSubsampling: true,
      // Doesn't emit the error when image is enlarged
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('src/assets/imagesresize/small'))
);
// 'gulp imagesresizelsmall' -- resizes all images to 230 pixels wide and caches your images
gulp.task('imagesresizelsmall', () =>
  gulp.src(imgSrc)
    .pipe(changed('src/assets/imagesresize/lsmall'))
    .pipe(responsive({
      // Resize all images to 230 pixels wide
      '*': {
        width: 230,
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 7,
      // Strip all metadata
      withMetadata: false,
      // There will be unused configurations for not updated files
      errorOnUnusedConfig: false,
      // Doesn't emit the error when image is not used
      errorOnUnusedImage: false,
      // Keep unmatched images in the stream
      passThroughUnused: false,
      // Disable the use of chroma subsampling with JPEG output (4:4:4)
      withoutChromaSubsampling: true,
      // Doesn't emit the error when image is enlarged
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('src/assets/imagesresize/lsmall'))
);
// 'gulp imagesresizexsmall' -- resizes all images to 140 pixels wide and caches your images
gulp.task('imagesresizexsmall', () =>
  gulp.src(imgSrc)
    .pipe(changed('src/assets/imagesresize/xsmall'))
    .pipe(responsive({
      // Resize all images to 140 pixels wide
      '*': {
        width: 140,
      },
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      quality: 80,
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Zlib compression level of PNG output format
      compressionLevel: 7,
      // Strip all metadata
      withMetadata: false,
      // There will be unused configurations for not updated files
      errorOnUnusedConfig: false,
      // Doesn't emit the error when image is not used
      errorOnUnusedImage: false,
      // Keep unmatched images in the stream
      passThroughUnused: false,
      // Disable the use of chroma subsampling with JPEG output (4:4:4)
      withoutChromaSubsampling: true,
      // Doesn't emit the error when image is enlarged
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('src/assets/imagesresize/xsmall'))
);
