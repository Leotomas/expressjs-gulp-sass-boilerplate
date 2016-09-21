var gulp = require("gulp");
var browserify = require('gulp-browserify');
var vueify = require('vueify');
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var watch = require("gulp-watch");

gulp.task("js", function() {
    gulp.src("./front/js/main.js")
        .pipe(browserify({transform: "vueify"}))
        .pipe(gulp.dest("./public/"))
});

gulp.task("sass", function() {
    gulp.src("./front/sass/app.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./public/"))
});


gulp.task("watch", function() {
    gulp.watch(["./front/js/**/*.js", "./front/js/**/*.vue"], ["js"])
    gulp.watch(["./front/sass/**/*.scss"], ["sass"])
});


gulp.task("default", ["sass", "js"]);

