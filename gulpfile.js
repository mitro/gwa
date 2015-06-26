'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    clean = require('gulp-clean'),
    size = require('gulp-size'),
    stylus = require('gulp-stylus');

gulp.task('transform', function() {
    return gulp.src('./app/main.js')
        .pipe(browserify({transform: ['reactify']}))
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
            'app/styles/*',
            'app/main.js'
        ],
        ['default']);
});

gulp.task('default', ['clean', 'include-css'], function() {
    gulp.start('transform');
});