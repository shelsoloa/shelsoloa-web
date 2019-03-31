import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

import '../styles/index.scss'


export default ({data}) => (
	<Layout class='index-page' header='' subheader=''>
		<img class='logo' alt="It's Shel Soloa" description='My personal logo'/>
		<h1 class='wordmark'>ShelSoloa</h1>
		<blockquote>Booking is currently CLOSED<br/>Availability opening in May</blockquote>

		<p>This is the development journal of Sheldon Soloa.<br/>Here you can get an overview of my projects, writing, and the occasional update.</p>

		<br/>
		<hr/>
		<br/>

		<h1>Featured Projects</h1>
		<div class='featured-projects'>
			<div class='project-preview'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h4 class='preview__title'>GameDevInspo</h4>
				<hr/>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</div>
			<div class='project-preview'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h4 class='preview__title'>GameDevInspo</h4>
				<hr/>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</div>
			<div class='project-preview'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h4 class='preview__title'>GameDevInspo</h4>
				<hr/>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</div>
		</div>

		<br/>
		<br/>
		<hr/>
		<br/>

		<h1>Latest Posts</h1>
		<div class='latest-posts'>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div class='post-preview' key={node.id}>
					<Link to={node.fields.slug}>
						<h4><span class='highlight'>{node.frontmatter.title}</span> {node.frontmatter.date}</h4>
						<p>{ node.excerpt }</p>
					</Link>
				</div>
			))}
		</div>

		<hr/>
	</Layout>
)


export const query = graphql`
	{
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 4
		) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "YYYY")
					}
				}
			}
		}
	}
`