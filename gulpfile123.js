var gulp = require('gulp');
var sass = require('gulp-sass');
// concatenar css
var concat = require('gulp-concat');
// minificar css
var minifyCSS = require('gulp-minify-css');
// var version= require('./package.json');

//npm install gulp --save --only=dev
gulp.task('hello', function() {
  console.log('Hello ');
});

//npm install gulp-sass

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/stylesheets'))
});

// //npm install gulp-concat

gulp.task('style_min', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(minifyCSS())
    .pipe(concat('style_main.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
});


// //npm install gulp-minify-css

// gulp.task('style_min', function(){
//   return gulp.src('scss/**/*.scss')
//     .pipe(sass()) // Converts Sass to CSS with gulp-sass
//     .pipe(minifyCSS())
//     .pipe(concat('style_main_'+version.version+'.min.css'))
//     .pipe(gulp.dest('public/stylesheets'))
// });

// //gulp watch

gulp.task('watch', ['style_min'], function (){
  gulp.watch('scss/**/*.scss', ['style_min']);

});