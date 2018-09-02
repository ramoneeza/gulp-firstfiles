var gulp = require('gulp');
var sort2 = require('../index.js');
var using=require("gulp-using");
var concat=require("gulp-concat");
gulp.task('default', defaultTask);

function defaultTask(done) {
    gulp.src('fixtures/*.fake')
    .pipe(using({prefix:"previous "}))
    .pipe(sort2(["fixtures/primero.fake","fixtures/segundo.fake"]))
    .pipe(using({prefix:"ordered "}))
    .pipe(concat("all.fake"))
    .pipe(using({prefix:"concat "}))
    .pipe(gulp.dest("copy/"));
    done();
}