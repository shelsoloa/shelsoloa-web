const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: 'pages' })
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return graphql(`
		{
		  blogPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/blog/"}}) {
		    edges {
		      node {
		        fields {
		          slug
		        }
		      }
		    }
		  }
		  
		  projectPages: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/pages/project/"}}) {
		    edges {
		      node {
		        fields {
		          slug
		        }
		      }
		    }
		  }
		}
	`).then(result => {
		// create blog page for all blog pasts
		result.data.blogPosts.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve('./src/templates/blog-post.js'),
				context: {
					slug: node.fields.slug
				}
			})
		})

		// create projects page for all project posts
		result.data.projectPages.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/project-page.js`),
				context: {
					slug: node.fields.slug
				}
			})
		})
	})
}