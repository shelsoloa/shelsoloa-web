import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import MoreButton from "../components/more-button"
import { ProjectPreview, ProjectsSection } from "../components/project-components"
import { PostPreview } from "../components/post-components"

import '../styles/index.scss'

import logo_transparent from '../data/img/img_shelsoloa__logo--transparent.png'


export default ({data}) => (
	<Layout class='index-page' header='' subheader=''>
		<img class='logo' alt="It's Shel Soloa" description='My personal logo' src={logo_transparent}/>
		<h1 class='header center'>ShelSoloa</h1>
		<p class='subheader center highlight'>The development journal of Shel Soloa</p>
		<blockquote>Booking is currently CLOSED<br/>Availability opening in May</blockquote>

		<br/>
		<hr/>
		<br/>

		<h1 class='center'>Featured Projects</h1>
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

		<h1 class='center'>Latest Posts</h1>
		<div class='latest-posts'>
			{data.recentBlogPosts.edges.map(({ node }) => (
				<PostPreview
					title={node.frontmatter.title}
					date={node.frontmatter.date}
					to={node.fields.slug}
					excerpt={node.excerpt}
				/>
			))}
		</div>
		<MoreButton style={{color: 'blue'}} to='/blog'/>

		<br/>
		<br/>
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