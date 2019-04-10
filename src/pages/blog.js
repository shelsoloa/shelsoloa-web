import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import '../styles/blog.scss'

export default ({ data }) => (
	<Layout class='blog-page' header='Blog Entries' subheader="updates and writing on programming, development, and other interests">
		{data.allMarkdownRemark.edges.map(({ node }) => (
			<div key={node.id}>
				<Link to={node.fields.slug}>
					<h3>{node.frontmatter.title} -- {node.frontmatter.date}</h3>
					<p>{node.excerpt}</p>
				</Link>
			</div>
		))}
	</Layout>
)

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
						date
					}
				}
			}
		}
	}
`