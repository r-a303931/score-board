var gulp = require('gulp');
var ts = require('gulp-typescript');
var jest = require('gulp-jest').default;

gulp.task('tscompile', function () {
	return gulp.src([
		'src/**/*.tsx',
		'!src/**/*.test.tsx'
	])
		.pipe(ts.createProject('tsconfig.json')())
		.pipe(gulp.dest('dist'))
});

gulp.task('jest', function () {
	process.env.NODE_ENV = 'test';

	return gulp.src('src/**/*.test.tsx')
		.pipe(ts.createProject('tsconfig.json')())
		.pipe(gulp.dest('dist'))
		.pipe(jest());
});

gulp.task('default', function () {
	return gulp.watch('src/**/*.tsx', ['tscompile']);
});