// top level functions
// gulp.task = Define tasks
// gulp.src = points to files to use
// gulp.dest = points to folder to output
// gulp.watch = watch files and folders for changes

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

// logs message
gulp.task('message', async function () {
  return console.log('Gulp is running...')
});

// Default task - doesnt require specifying task name on command - gulp {default}
// gulp.task('default', async function () {
//   return console.log('Gulp is running...')
// });

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

// Minify js
// gulp.task('minify-js', async function () {
//   gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

// Compile sass
gulp.task('compile-sass', async function () {
  gulp.src('src/sass/*.scss')
    // Incase there is an error in sass code, log it
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Combine javascript files
gulp.task('combine-js', async function () {
  gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// Run all tasks
gulp.task('default', gulp.series(
  'message',
  'copy-html',
  'optimize-images',
  'compile-sass',
  'combine-js',
  ),
);

gulp.task('watch', async function () {
  gulp.watch('src/*.html', gulp.series('copy-html'));
  gulp.watch('src/images/*', gulp.series('optimize-images'));
  gulp.watch('src/sass/*.scss', gulp.series('compile-sass'));
  gulp.watch('src/js/*.js', gulp.series('combine-js'));
});
