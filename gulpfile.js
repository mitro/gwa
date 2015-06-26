'use strict';

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    clean = require('gulp-clean'),
    size = require('gulp-size');

gulp.task('transform', function() {
    return gulp.src('./app/main.js')
        .pipe(browserify({transform: ['reactify']}))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(size());
});

gulp.task('clean', function() {
    return gulp.src(['./public/scripts'], {read: false})
        .pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('transform');
});