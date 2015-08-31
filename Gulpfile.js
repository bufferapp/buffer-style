var gulp = require('gulp');
var del = require('del');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

var paths = {
  dist: './dist'
};

gulp.task('clean', function(cb) {
  del([paths.dist], cb);
});


gulp.task('babel', function(cb) {
  return gulp
    .src([
      './src/**/*.jsx',
      './src/**/*.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('sass', function(cb) {
  return gulp
    .src([ './src/scss/*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.dist + '/css'));
});

gulp.task('prepublish', ['clean', 'babel', 'sass']);

gulp.task('default', ['publish']);
