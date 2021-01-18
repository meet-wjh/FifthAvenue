//导入模块
const {src,dest,watch} = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    concat = require('gulp-concat');

//发布任务
function fnHTML(){
    return src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(dest('./dist/pages'));
}
function fnCopyIndex(){
    return src('./src/index.html')
    .pipe(dest('./dist/'))
}
function fnImage(){
    return src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(dest('./dist/img'))
}
function fnJS(){
    return src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/js'))
}
function fnSass(){
    return src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}
function fnWatch(){
    watch('./src/pages/*.html',fnHTML);
    watch('./src/index.html',fnCopyIndex);
    watch('./src/images/**/*',fnImage);
    watch('./src/js/*.js',fnJS);
    watch('./sass/*.scss',fnSass);
}

//导出模块
exports.html = fnHTML;
exports.copyIndex = fnCopyIndex;
exports.sass = fnSass;
exports.js = fnJS;
exports.image = fnImage;
exports.default = fnWatch;