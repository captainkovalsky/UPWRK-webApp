
var iswin32 = process.platform === "win32"; //REMINDER: can be used for color output
var spawn = require('child_process').spawn,
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch');


var TEST_FOLDER = 'tests';
var TEST_FILES = [TEST_FOLDER + '/**/*.js'];
var casperProcess = (iswin32 ? "casperjs.cmd" : "casperjs");   


gulp.task('test', function () {
    var casperChild = spawn(casperProcess, ['test', TEST_FOLDER]);

    casperChild.stdout.on('data', function (data) {
        gutil.log('CasperJS:', data.toString().slice(0, -1)); // Remove \n
    });
});

gulp.task('watch', function () {
  gulp.watch(TEST_FILES, ['test']);
});