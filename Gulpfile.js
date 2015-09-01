var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');


var paths = {
  dist: './dist',
  guide: './public'
};


gulp.task('clean', function(cb) {
  del([paths.dist], cb);
});

gulp.task('babel', function(cb) {
  return gulp
    .src([
      '!src/guide.js',
      'src/**/*.jsx',
      'src/**/*.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest(paths.dist));
});

var webpackConfig = {
  entry: [
    './src/js/guide.js'
  ],
  output: {
		path: __dirname + '/public',
		publicPath: '/',
		filename: 'js/bundle.js'
	},
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?stage=0'],
      }
    ]
  },
  devtool: '#inline-source-map'
};

gulp.task('webpack', function(callback) {
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({
      // output options
    }));
    callback();
  });
});

gulp.task('webpack-dev-server', function(callback) {

  // Start a webpack-dev-server
  var compiler = webpack(webpackConfig);

  new WebpackDevServer(compiler, {

    contentBase: path.join(__dirname, 'public'),

    hot: true,

    // This is where we're running our app server
    proxy: {
      '*': 'http://localhost:3000'
    }

  }).listen(8080, 'localhost', function(err) {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    // Server listening
    gutil.log('[webpack-dev-server]',
      'http://localhost:8080/webpack-dev-server/index.html');

    // Comment out to keep the server running
    // callback();
  });
});

var createSassTask = function(src, dest) {
  return function(cb) {
    return gulp
      .src(src)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(dest + '/css'));
  };
};

gulp.task('sass-dist', createSassTask(['./src/scss/style.scss'], paths.dist));
gulp.task('sass-all', createSassTask([ './src/scss/*.scss'], paths.guide));

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass-all']);
  gulp.watch(['./src/js/**/*.js', './src/js/**/*.jsx'], ['webpack']);
});

gulp.task('watch:sass', function() {
  gulp.watch('./src/scss/**/*.scss', ['sass-all']);
});

gulp.task('dev', ['webpack-dev-server', 'watch:sass']);

gulp.task('prepublish', ['clean', 'babel', 'sass-dist']);

gulp.task('default', ['publish']);
