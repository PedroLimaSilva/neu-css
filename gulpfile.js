'use strict';

const { src, dest, parallel, watch, series } = require('gulp');

const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
sass.compiler = require('node-sass');

const htmlmin = require('gulp-htmlmin');


function build_sass() {
  return src('./src/scss/neu.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('./docs/css'));
}

function watch_sass() {
  return watch('./src/**/*.scss', build_sass);
}

function build_html() {
  return src('./src/docs/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./docs'));;
}

function watch_html() {
  return watch('./src/**/*.html', build_html);
}

const build_all = parallel(build_sass, build_html);
const watch_all = parallel(watch_sass, watch_html);

exports.build = build_all;
exports.watch = watch_all;
exports.default = series(build_all, watch_all);
