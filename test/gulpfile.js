var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");
var stream = require('webpack-stream');
var Server = require('karma').Server;
var jshint = require('gulp-jshint');
var fix = require('gulp-fixmyjs');
var plugins = require('gulp-load-plugins')();


var path = {
    HTML: 'app/index.html',
    ALL: ['app/*.js', 'app/**/*.js'],
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/app',
    DEST_BUILD
: 'dist/app',
    DEST: 'dist'
};

gulp.task('default', ['serve', 'watch']);

gulp.task('index', function(){

    var vendorScripts;


    return gulp.src(path.index)
                .pipe(gulp.dest(path.DEST))
                .pipe(gulp.inject(vendorScripts))
                .pipe(gulp.inject(vendorScripts))
                .pipe(gulp.dest(path.DEST))

});

gulp.task('webpack', function() {

    return gulp.src(path.ALL) // gulp looks for all source files under specified path
        .pipe(sourcemaps.init()) // creates a source map which would be very helpful for debugging by maintaining the actual source code structure

        .pipe(uglify()) // minifies the code for better compression
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.DEST_BUILD));
});
gulp.task('pack', function(){

    return gulp.src('./app/app.js')
                .pipe(webpack())
                .pipe(gulp.dest(path.DEST_BUILD))
});

gulp.task('serve', function(callback) {

    var myConfig = webpack(webpackConfig);
    console.log(myConfig)
    new WebpackDevServer(myConfig, {

        publicPath: '/app' ,
        stats: {
            colors: true
        }
    }).listen(8080, 'localhost', function(err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        console.log(err);
        gutil.log("[webpack-dev-server]", "http://localhost:8080/");
    });


});
gulp.task('watch', function() {
    gulp.watch(path.ALL, ['webpack']);
});

gulp.task('test', function(done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('hint', function() {

    return gulp.src('./app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lint', function() {

    return gulp.src('./fixed/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('fix', function() {

    gulp.src('./app/**/*.js')
        .pipe(fix())
        .pipe(gulp.dest('./fixed/'))
});
