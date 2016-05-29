'use strict';

// sass compile
var gulp = require('gulp');
var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var rtlcss = require('gulp-rtlcss');
var concat = require('gulp-concat');
var usemin = require('gulp-usemin');
var clean = require('gulp-clean');
var minifyCss = require('gulp-minify-css');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence').use(gulp);
var runSequence = require('run-sequence');
var gutil = require('gulp-util');

//*** SASS compiler task
gulp.task('sass', function () {
  // bootstrap compilation
	gulp.src('./web/sass/style.scss').pipe(sass()).pipe(gulp.dest('./web/assets/style.css'));
});

//*** SASS watch(realtime) compiler task
gulp.task('sass:watch', function () {
	gulp.watch('./web/sass/**/*.scss', ['sass']);
});


gulp.task('copy', function () {
  gulp.src('./web/views/**/*.html').pipe(gulp.dest('./build/views/'))
  gulp.src('./web/assets/fonts/**/*').pipe(gulp.dest('./build/fonts/'))
  gulp.src('./web/assets/images/**/*').pipe(gulp.dest('./build/images/'))
  gulp.src('./web/favicon.ico').pipe(gulp.dest('./build/'))
});

//*** CSS & JS minify task
gulp.task('minify', function () {
    // css minify
    gulp.src(['./web/assets/apps/css/*.css', '!./web/assets/apps/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/apps/css/'));

    gulp.src(['./web/assets/global/css/*.css','!./web/assets/global/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/global/css/'));
    gulp.src(['./web/assets/pages/css/*.css','!./web/assets/pages/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/pages/css/'));

    gulp.src(['./web/assets/layouts/**/css/*.css','!./web/assets/layouts/**/css/*.min.css']).pipe(rename({suffix: '.min'})).pipe(minifyCss()).pipe(gulp.dest('./web/assets/layouts/'));
    gulp.src(['./web/assets/layouts/**/css/**/*.css','!./web/assets/layouts/**/css/**/*.min.css']).pipe(rename({suffix: '.min'})).pipe(minifyCss()).pipe(gulp.dest('./web/assets/layouts/'));

    gulp.src(['./web/assets/global/plugins/bootstrap/css/*.css','!./web/assets/global/plugins/bootstrap/css/*.min.css']).pipe(minifyCss()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/global/plugins/bootstrap/css/'));

    //js minify
    gulp.src(['./web/assets/apps/scripts/*.js','!./web/assets/apps/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/apps/scripts/'));
    gulp.src(['./web/assets/global/scripts/*.js','!./web/assets/global/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/global/scripts'));
    gulp.src(['./web/assets/pages/scripts/*.js','!./web/assets/pages/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/pages/scripts'));
    gulp.src(['./web/assets/layouts/**/scripts/*.js','!./web/assets/layouts/**/scripts/*.min.js']).pipe(uglify()).pipe(rename({suffix: '.min'})).pipe(gulp.dest('./web/assets/layouts/'));
});

//*** HTML formatter task
gulp.task('prettify', function() {

	gulp.src('./**/*.html').
	  	pipe(prettify({
  		indent_size: 4,
  		indent_inner_html: true,
  		unformatted: ['pre', 'code']
 		})).
 		pipe(gulp.dest('./'));
});

gulp.task('concat', function () {
  gulp.src(['./web/js/app.js']).
  pipe(gulp.dest('./web/dist/'));

  gulp.src(['./web/js/app-config.js']).
  pipe(gulp.dest('./web/dist/'));

  gulp.src(['./web/js/**/*.js',
            '!./web/js/services/lb-services.js',
            '!./web/js/app.js',
            '!./web/js/sample.config.js',
            '!./web/js/app-config.js']).
          pipe(concat('main.js')).
          pipe(gulp.dest('./web/dist'));

});

gulp.task('clean', function () {
  return gulp.src('build', {read: false}).pipe(clean());
});

gulp.task('usemin', function() {
  return gulp.src('./web/index.html')
    .pipe(usemin({
      css: [ minifyCss(), rev() ],
      js: [ uglify({ outSourceMap: true }).on('error', gutil.log), rev() ],
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build', gulpSequence('clean', 'concat', 'usemin', 'copy'));

gulp.task('watch', function () {
  return gulp.watch('./web/js/**/*.js', function () {
    return runSequence('clean', 'concat', 'usemin', 'copy');
  });
});

