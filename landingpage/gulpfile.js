const gulp = require('gulp')
const bs = require('browser-sync').create()
const uglify = require('gulp-uglify')
const pump = require('pump')
const cleanCss = require('gulp-clean-css')
const cleanHtml = require('gulp-htmlclean')
const bundle = require('gulp-bundle-assets')
const gzip = require('gulp-gzip')

gulp.task('build-html', function() {
  pump([
    gulp.src('index.html'),
    cleanHtml(),
    gulp.dest('dist')
  ])
})

gulp.task('build-js', function(cb) {
  pump([
    gulp.src('js/*.js'),
    uglify(),
    gulp.dest('dist/js')
  ], cb)
})

gulp.task('build-css', function() {
  pump([
    gulp.src('css/*.css'),
    cleanCss({ compability: 'ie8' }),
    gulp.dest('dist/css')
  ])
})

gulp.task('bundle', function() {
  pump([
    gulp.src('bundle.config.js'),
    bundle(),
    // gzip(),
    gulp.dest('dist')
  ])
})

gulp.task('build', ['build-css', 'build-js', 'build-html'])

gulp.task('bs-build', () => {
  bs.init({
    server: {
      baseDir: './dist'
    },
    port: 3000,
  })
})

gulp.task('bs', () => {
  bs.init({
    server: {
      baseDir: './'
    },
    port: 8080,
  })
})

