var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var less = require('gulp-less');
var path = require('path');

var paths = {
  scripts: 'js/*.js' 
};
function handleError (error) {
 //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}

gulp.task("default", function () {
  browserify({
    entries: './js/app.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error', handleError)
    .pipe(source('output.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('less', function () {
  return gulp.src('./less/less.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ["default"],["less"])
  .on('error', handleError);
});