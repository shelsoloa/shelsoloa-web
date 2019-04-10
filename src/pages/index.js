import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import MoreButton from "../components/more-button"
import { ProjectPreview, ProjectsSection } from "../components/project-components"

import '../styles/index.scss'

import logo_transparent from '../data/img/img_shelsoloa__logo--transparent.png'


export default ({data}) => (
	<Layout class='index-page' header='' subheader=''>
		<img class='logo' alt="It's Shel Soloa" description='My personal logo' src={logo_transparent}/>
		<h1 class='wordmark'>ShelSoloa</h1>
		<blockquote>Booking is currently CLOSED<br/>Availability opening in May</blockquote>

		<p>This is the development journal of Sheldon Soloa.<br/>Here you can get an overview of my projects, writing, and the occasional update.</p>

		<br/>
		<hr/>
		<br/>

		<h1>Featured Projects</h1>
		<ProjectsSection class='featured-projects'>
			{data.featuredProjects.edges.map(({ node }) => (
				<ProjectPreview
					title={node.frontmatter.title}
					description={node.frontmatter.subtitle}
					image={node.frontmatter.preview_image.publicURL}
					image_alt={node.frontmatter.title + ' preview image'}
					to={node.fields.slug}
				/>
			))}
		</ProjectsSection>
		<br/>
		<MoreButton to='/projects'/>

		<br/>
		<br/>
		<hr/>
		<br/>

		<h1>Latest Posts</h1>
		<div class='latest-posts'>
			{data.recentBlogPosts.edges.map(({ node }) => (
				<Link className='post-preview' to={node.fields.slug}>
					<h4><span class='highlight'>{node.frontmatter.title}</span> {node.frontmatter.date}</h4>
					<p>{ node.excerpt }</p>
				</Link>
			))}
		</div>
		<MoreButton to='/blog'/>

		<br/>
		<br/>
		<hr/>
		<br/>
	</Layout>
)


export const query = graphql`
	query IndexQuery {
		featuredProjects: allMarkdownRemark(
			filter: {frontmatter: {tags: {in: "featured"}}}
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						subtitle
						preview_image {
							publicURL
						}
						tags
					}
				}
			}
		}

		recentBlogPosts: allMarkdownRemark(
		    filter: { fileAbsolutePath: {regex: "/pages\/blog/"} }
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