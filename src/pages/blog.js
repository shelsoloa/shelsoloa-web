import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { PostPreview } from "../components/post-components"

import '../styles/blog.scss'

const Blog = ({ data }) => (
	<Layout class='blog-page' header='Blog Entries' subheader="on programming, development, and other interests">
		{data.allMarkdownRemark.edges.map(({ node }) => (
			<PostPreview
				title={node.frontmatter.title}
				date={node.frontmatter.date}
				excerpt={node.excerpt}
				to={node.fields.slug}
			/>
		))}
	</Layout>
)
export default Blog;

export const query = graphql`
	{
		allMarkdownRemark (
		    filter: { fileAbsolutePath: {regex: "/pages\/blog/"} }
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MM/DD/YYYY")
					}
				}
			}
		}
	}
`