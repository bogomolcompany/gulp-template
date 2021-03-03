import gulp from 'gulp'
import config from './gulp/config'
import clean from './gulp/tasks/clean'
import server from './gulp/tasks/server'
import { htmlBuild, htmlWatch } from './gulp/tasks/html'
import { sassBuild, sassWatch } from './gulp/tasks/styles'
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts'
import { assetsBuild, assetsWatch } from './gulp/tasks/assets'
import { imagesBuild, imagesWatch } from './gulp/tasks/images'
import { spritesBuild, spritesWatch } from './gulp/tasks/sprites'

config.setEnv()

export const build = gulp.series(
	clean,
	gulp.parallel(
		scriptsBuild,
		htmlBuild,
		sassBuild,
		assetsBuild,
		imagesBuild,
		spritesBuild
	)
)

export const watch = gulp.series(
	build,
	server,
	gulp.parallel(
		scriptsWatch,
		htmlWatch,
		sassWatch,
		assetsWatch,
		imagesWatch,
		spritesWatch
	)
)