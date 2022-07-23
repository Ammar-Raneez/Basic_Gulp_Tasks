// top level functions
// gulp.task = Define tasks
// gulp.src = points to files to use
// gulp.dest = points to folder to output
// gulp.watch = watch files and folders for changes

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

// logs message
gulp.task('message', async function () {
  return console.log('Gulp is running...')
});

// Default task - doesnt require specifying task name on command - gulp {default}
gulp.task('default', async function () {
  return console.log('Gulp is running...')
});

// Copy html files
gulp.task('copy-html', async function () {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('optimize-images', async function () {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
});
