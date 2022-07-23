const gulp = require('gulp');
// top level functions
// gulp.task = Define tasks
// gulp.src = points to files to use
// gulp.dest = points to folder to output
// gulp.watch = watch files and folders for changes

// logs message
gulp.task('message', async function () {
  return console.log('Gulp is running...')
})

// Default task - doesnt require specifying task name on command - gulp {default}
gulp.task('default', async function () {
  return console.log('Gulp is running...')
})