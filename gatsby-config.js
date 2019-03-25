module.exports = {
	siteMetadata: {
		title: 'shel soloa'
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			}
		},
		`gatsby-transformer-remark`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-page-transitions`,
			options: {
				transitionTime: 500,
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			}
		}
	]
}