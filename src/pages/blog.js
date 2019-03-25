import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import '../styles/blog.scss'

export default ({ data }) => (
	<Layout class='blog-page' header='Blog' subheader='~/blog/'>

		<Link to='/'>Home</Link>
		<Link to='/projects'>Projects</Link>

		<h1>Blog Entries</h1>

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
		allMarkdownRemark {
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