module.exports = {
	siteMetadata: {
		title: 'shel soloa',
		description: '...',
		siteUrl: 'http://shelsoloa.com',
		author: {
			name: 'Shel Soloa'
		},
		social: {
			github: 'shelsoloa',
			medium: '@shelsoloa',
			tumblr: 'shelsoloa',
			twitter: 'shelsoloa',
			youtube: 'UCM2oD1gLLENjmHLNURW8JDg'
		}
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 960,
						}
					},
					`gatsby-remark-copy-linked-files`
				]
			}
		},
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/data/img/img_shelsoloa__logo.png`
			}
		},
		`gatsby-plugin-react-helmet`,
        {
          resolve: "gatsby-plugin-web-font-loader",
          options: {
            custom: {
              families: ["anka-coder"],
              urls: ["/fonts/fonts.css"],
            },
          },
        },
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			}
		}
	]
}