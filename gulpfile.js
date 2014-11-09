var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')

gulp.task('default', function () {
  nodemon({ script: 'server.js', ext: 'js', ignore: ['ignored.js'] })
    .on('restart', function () {
      console.log('restarted!')
    })
})
