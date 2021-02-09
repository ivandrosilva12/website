const path = require('path')
const nextTranslate = require("next-translate")

module.exports = {
	...nextTranslate(),
	trailingSlash: true,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}
