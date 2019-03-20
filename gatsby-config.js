module.exports = {
	siteMetadata: {
		title: 'shel soloa'
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			}
		}
	]
}