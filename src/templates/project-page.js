import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import './project-page.scss'

export default ({ data }) => {
	const project = data.markdownRemark
	return (
		<Layout class='project-page'>
			<div class='project'>
				<h1 class='project__title'>{project.frontmatter.title}</h1>
				<p class='project__status'>Status: {project.frontmatter.status}</p>
				<img src={project.frontmatter.preview_image.publicURL}/>
				
				<div dangerouslySetInnerHTML={{ __html: project.html }}/>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug } }) {
			html
			frontmatter {
				title
				status
				preview_image {
					publicURL
				}
				tags
			}
		}
	}
`