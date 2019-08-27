/// <binding ProjectOpened='watchSass' />
const gulp = require('gulp');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
sass.compiler = require('node-sass');

const paths = {
    styles: {
        src: ['./**/*.scss', '!node_modules/**/*.scss'],
        dest: 'wwwroot/css/'
    }
}

const styles = () => {
    return gulp.src(paths.styles.src)
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('site.css'))
    .pipe(postcss([
        require('precss'),
        require('autoprefixer'),
        require('cssnano')
    ]))
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

const watch = () => {
    gulp.watch(paths.styles.src, styles);
}

const build = gulp.series(styles);

exports.watch = watch;
exports.styles = styles;
exports.build = build;

exports.default = build;