var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var sass = require('gulp-sass');


gulp.task('default', ['serve','sass'], function () {
	console.log("Command:\n   serve - run live reload server");
});

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });

    gulp.watch(['./SCSS/*.html'], reload);
    gulp.watch(['./js/*.js'], reload);
    gulp.watch(['./css/*.css'], reload);
    gulp.watch(['./SCSS/*.scss'],reload);
});

gulp.task('sass', function () {
    return gulp.src('SCSS/style-01.scss')
        .pipe(sass())
        .pipe(gulp.dest(''));
});
