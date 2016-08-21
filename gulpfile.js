var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
		lazy: true
	});
var debug = require('gulp-debug');
var mainBowerFiles = require('main-bower-files');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var debowerify = require('debowerify');

gulp.task('inject-main-files', function() {
	return gulp.src('./app/index.html')
		.pipe($.inject(gulp.src(mainBowerFiles(), {
			read: false
		}, {
			relative: true
		}), {
			name: 'bower',
			ignorePath: '/bower_components'
		}))
		.pipe($.inject(gulp.src(['./app/styles/**/*.css','./app/src/**/*.js','./app/styles/*.js'],{read:false}).pipe(debug()),{relative: true}))
		.pipe(gulp.dest('./app'));
});

gulp.task('compile-js', function() {
    var bundler = browserify({basedir: 'app/*.js'}).transform(debowerify);

    return bundler.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('app'));
}); 