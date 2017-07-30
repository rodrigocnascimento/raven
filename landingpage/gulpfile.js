const gulp = require('gulp')
const bs = require('browser-sync').create()

gulp.task('bs', () => {
  bs.init({
    server: {
      baseDir: './'
    },
    port: 8080,
  })
})

