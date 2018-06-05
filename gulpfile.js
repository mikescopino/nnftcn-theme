var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

///////////////////////////////////////////
// SASS
///////////////////////////////////////////

gulp.task('sass', function() {
  return gulp.src('assets/sass/*.scss')
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/built/'))
      .on('end', function(){
        gutil.log('CSS updated');
      });
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/**', ['sass']);
});


///////////////////////////////////////////
// Startup
///////////////////////////////////////////

gulp.task('default', ['sass'], function () {
    gulp.start('watch');
});
