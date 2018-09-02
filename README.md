# [gulp](https://github.com/wearefractal/gulp)-firstfiles
> Alternative to gulp-sort. Declare an array of files to appear in first place.

## Install

`$ npm install gulp-firstfiles --save-dev`

## Usage

```js
var firstfiles = require('gulp-firstfiles');
var concat=require('gulp-concat');

gulp.src('src/js/*.js')
    .pipe(firstfiles(['src/js/first.js','src/js/second.js']))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./build/js'));
```

This function is expected to return back a sorted list of files.
