import gulp from 'gulp'
import plumber from 'gulp-plumber'
import include from 'gulp-file-include'
import config from '../config'

export const htmlBuild = () =>
	gulp
		.src(`${config.src.html}/*.html`)
		.pipe(plumber())
		.pipe(
			include({
				prefix: '@@'
			})
		)
		.pipe(gulp.dest(config.dest.html))

export const htmlWatch = () => {
	gulp.watch(`${config.src.html}/**/*.html`, htmlBuild)
}
