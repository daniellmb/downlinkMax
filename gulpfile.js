/**
 * @file
 *
 * ### Responsibilities
 * - automate common tasks using gulp
 *
 * Scaffolded with generator-microjs v0.1.2
 *
 * @author Daniel Lamb <dlamb.open.source@gmail.com>
 */
'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    complexity = require('gulp-complexity'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    karma = require('gulp-karma'),
    fs = require('fs'),
    sourcemaps = require('gulp-sourcemaps'),
    source = 'downlinkmax.js',
    sourceMin = 'downlinkmax.min.js',
    specs = 'test/spec/*.spec.js',
    karmaConf = 'test/karma.conf',
    umdWrapper = fs.readFileSync('./.umd');

gulp.task('lint', function () {
  return gulp.src([source, specs])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('gpa', function () {
  return gulp.src([source, specs])
    .pipe(complexity({
      cyclomatic: [8],
      halstead: [15],
      maintainability: [80]
    }));
});

gulp.task('test', function () {
  return gulp.src([source, specs])
    .pipe(karma({
      configFile: karmaConf + '.js'
    }));
});

gulp.task('min', function () {
  return gulp.src(source)
    .pipe(rename(sourceMin))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .on('error', function (error) {
      gutil.log(gutil.colors.red('[Error]'), error.toString());
    })
    .pipe(replace(/(.*)/, umdWrapper))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});

gulp.task('test-coffee', function () {
  return gulp.src(['downlinkmax.coffee', 'test/spec/*.spec.coffee'])
    .pipe(karma({
      configFile: karmaConf + '.coffee'
    }));
});

gulp.task('test-min', ['min'], function () {
  return gulp.src([sourceMin, specs])
    .pipe(karma({
      configFile: karmaConf + '.js',
      reporters: ['dots']
    }));
});

gulp.task('default', ['lint', 'gpa', 'test', 'test-coffee', 'test-min']);
