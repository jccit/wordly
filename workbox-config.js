module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{js,html}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};