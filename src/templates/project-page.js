import React from "react"
import { graphql } from "gatsby"
import { FaExternalLinkSquareAlt, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import Layout from "../components/layout"

import './project-page.scss'

export default ({ data }) => {
	const project = data.markdownRemark

	return (
		<Layout class='project-page'>
			<div class='project'>
				<h1 class='project__title'>{project.frontmatter.title}</h1>
				<p class='project__status'>Status: {project.frontmatter.status}</p>
				<ul class='project__social'>
					{project.frontmatter.website &&
						<li>
							<a href={project.frontmatter.website}><FaExternalLinkSquareAlt/></a>
						</li>
					}
					{project.frontmatter.facebook &&
						<li>
							<a href={'http://facebook.com/' + project.frontmatter.facebook}><FaFacebook/></a>
						</li>
					}
					{project.frontmatter.github && 
						<li>
							<a href={'http://github.com/' + project.frontmatter.github}><FaGithub/></a>
						</li>
					}
					{project.frontmatter.instagram &&
						<li>
							<a href={'http://instagram.com/' + project.frontmatter.instagram}><FaInstagram/></a>
						</li>
					}
					{project.frontmatter.twitter && 
						<li>
							<a href={'http://twitter.com/' + project.frontmatter.twitter}><FaTwitter/></a>
						</li>
					}
				</ul>

				<img src={project.frontmatter.preview_image.publicURL} alt={project.frontmatter.title + ' preview image'}/>
				
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

				website
				facebook
				github
				instagram
				twitter
			}
		}
	}
`