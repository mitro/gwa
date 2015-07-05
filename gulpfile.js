'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    clean = require('gulp-clean'),
    size = require('gulp-size'),
    stylus = require('gulp-stylus'),
    babelify = require('babelify');

gulp.task('transform', function() {
    return gulp.src('./app/scripts/main.js')
        .pipe(browserify({transform: ['babelify']}))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(size());
});

gulp.task('clean', function() {
    return gulp.src(['./public/scripts/main.js'], {read: false})
        .pipe(clean());
});

gulp.task('include-css', function() {
    gulp.src('./app/styles/*.styl')
        .pipe(stylus({
            'include css': true
        }))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', ['default'], function(cb) {
    console.log('watching files for changes...');
    gulp.watch(
        [
            'app/styles/**/*.*',
            'app/scripts/**/*.*'
        ],
        ['default']);
});

gulp.task('default', ['clean', 'include-css'], function() {
    gulp.start('transform');
});