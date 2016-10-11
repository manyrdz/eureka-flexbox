var gulp = require("gulp")
var less = require("gulp-less")
var autoprefixer = require("gulp-autoprefixer")
var cleanCSS = require("gulp-clean-css")
var rename = require("gulp-rename")
var gcmq = require('gulp-group-css-media-queries');

gulp.task("build", () => {
  return (
    gulp.src("src/eureka-flexbox.less")
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(gcmq())
    .pipe(rename("eureka-flexbox.css"))
    .pipe(gulp.dest("dist"))
    .pipe(cleanCSS())
    .pipe(rename("eureka-flexbox.min.css"))
    .pipe(gulp.dest("dist"))
  )
})
