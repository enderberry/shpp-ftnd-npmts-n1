const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const terser = require('gulp-terser');
const watchify = require('watchify');
const tsify = require('tsify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const fancy_log = require('fancy-log');
const paths = {
    pages: ['src/*.html', 'src/*.css'],
};

const watchedBrowserify = watchify(
    browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {},
    }).plugin(tsify)
);

gulp.task('copy-html', function () {
    return gulp.src(paths.pages).pipe(gulp.dest('dist'));
});

function bundle() {
    return watchedBrowserify
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts'],
        })
        .bundle()
        .on('error', fancy_log)
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
}

gulp.task('default', gulp.series(gulp.parallel('copy-html'), bundle));
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', fancy_log);
