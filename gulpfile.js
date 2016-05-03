'use strict';

// sass compile
var gulp = require('gulp');
var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var rtlcss = require("gulp-rtlcss");


//*** SASS compiler task
gulp.task('sass', function () {
  // bootstrap compilation
	gulp.src('./web/sass/bootstrap.scss').pipe(sass()).pipe(gulp.dest('./web/assets/global/plugins/bootstrap/css/'));

  // select2 compilation using bootstrap variables
	gulp.src('./web/assets/global/plugins/select2/sass/select2-bootstrap.min.scss').pipe(sass({outputStyle: 'compressed'})).pipe(gulp.dest('./web/assets/global/plugins/select2/css/'));

  // global theme stylesheet compilation
	gulp.src('./web/sass/global/*.scss').pipe(sass()).pipe(gulp.dest('./web/assets/global/css'));
	gulp.src('./web/sass/apps/*.scss').pipe(sass()).pipe(gulp.dest('./web/assets/apps/css'));
	gulp.src('./web/sass/pages/*.scss').pipe(sass()).pipe(gulp.dest('./web/assets/pages/css'));

  // theme layouts compilation
	gulp.src('./web/sass/layouts/layout/*.scss').pipe(sass()).pipe(gulp.dest('./web/assets/layouts/layout/css'));
  gulp.src('./web/sass/layouts/layout/themes/*.scss').pipe(sass()).pipe(gulp.dest('./web/assets/layouts/layout/css/themes'));
});

//*** SASS watch(realtime) compiler task
gulp.task('sass:watch', function () {
	gulp.watch('./web/sass/**/*.scss', ['sass']);
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

//*** RTL convertor task
gulp.task('rtlcss', function () {

  gulp
    .src(['./web/assets/apps/css/*.css', '!./web/assets/apps/css/*-rtl.min.css', '!./web/assets/apps/css/*-rtl.css', '!./web/assets/apps/css/*.min.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./web/assets/apps/css'));

  gulp
    .src(['./web/assets/pages/css/*.css', '!./web/assets/pages/css/*-rtl.min.css', '!./web/assets/pages/css/*-rtl.css', '!./web/assets/pages/css/*.min.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./web/assets/pages/css'));

  gulp
    .src(['./web/assets/global/css/*.css', '!./web/assets/global/css/*-rtl.min.css', '!./web/assets/global/css/*-rtl.css', '!./web/assets/global/css/*.min.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./web/assets/global/css'));

  gulp
    .src(['./web/assets/layouts/**/css/*.css', '!./web/assets/layouts/**/css/*-rtl.css', '!./web/assets/layouts/**/css/*-rtl.min.css', '!./web/assets/layouts/**/css/*.min.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./web/assets/layouts'));

  gulp
    .src(['./web/assets/layouts/**/css/**/*.css', '!./web/assets/layouts/**/css/**/*-rtl.css', '!./web/assets/layouts/**/css/**/*-rtl.min.css', '!./web/assets/layouts/**/css/**/*.min.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./web/assets/layouts'));

  gulp
    .src(['./web/assets/global/plugins/bootstrap/css/*.css', '!./web/assets/global/plugins/bootstrap/css/*-rtl.css', '!./web/assets/global/plugins/bootstrap/css/*.min.css'])
    .pipe(rtlcss())
    .pipe(rename({suffix: '-rtl'}))
    .pipe(gulp.dest('./web/assets/global/plugins/bootstrap/css'));
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
