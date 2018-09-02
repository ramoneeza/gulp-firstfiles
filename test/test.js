var assert = require('assert');
var firstfiles = require('../');
var gulp=require('gulp');
var through=require('through2');
var concat=require('gulp-concat');

describe('gulp-firstfiles', function() {
    it('should order files', function(done) {
        var filelist=[]; 
        gulp.task('test',()=>{
            return gulp.src('test/fixtures/*.fake')
            .pipe(firstfiles(['test/fixtures/primero.fake','test/fixtures/segundo.fake']))
            .pipe(through.obj((file,enc,cb)=>{
                filelist.push(file.basename);
                cb();
            }))
            .pipe(concat('result.fake'))
            .pipe(gulp.dest('test/copy/'));
        });
        gulp.series('test')(()=>{
            assert(filelist.length==6);
            assert(filelist[0]=="primero.fake");
            assert(filelist[1]=="segundo.fake");
            done();
        });
    });
  });
