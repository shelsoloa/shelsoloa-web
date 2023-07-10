import React from "react"
import { graphql } from "gatsby"
import { FaExternalLinkSquareAlt, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import Layout from "../components/layout"

import './project-page.scss'

const ProjectPage = ({ data }) => {
	const project = data.markdownRemark

	return (
		<Layout class='project-page'>
			<div class='project'>
				<h1 class='project__title'>{project.frontmatter.title}</h1>
				<p class='project__status'>Status: <span class='status'>{project.frontmatter.status}</span></p>
				<ul class='project__social'>
					{project.frontmatter.website &&
						<li>
							<a aria-label='web link' href={project.frontmatter.website}><FaExternalLinkSquareAlt/></a>
						</li>
					}
					{project.frontmatter.facebook &&
						<li>
							<a aria-label='facebook link' href={'http://facebook.com/' + project.frontmatter.facebook}><FaFacebook/></a>
						</li>
					}
					{project.frontmatter.github && 
						<li>
							<a aria-label='github link' href={'http://github.com/' + project.frontmatter.github}><FaGithub/></a>
						</li>
					}
					{project.frontmatter.instagram &&
						<li>
							<a aria-label='instagram link' href={'http://instagram.com/' + project.frontmatter.instagram}><FaInstagram/></a>
						</li>
					}
					{project.frontmatter.twitter && 
						<li>
							<a aria-label='twitter link' href={'http://twitter.com/' + project.frontmatter.twitter}><FaTwitter/></a>
						</li>
					}
				</ul>

				<img class='project__header-image' 
					src={project.frontmatter.banner_image != null ? project.frontmatter.banner_image.publicURL : project.frontmatter.preview_image.publicURL}
					alt={project.frontmatter.title + ' preview image'}
				/>
			
				<div dangerouslySetInnerHTML={{ __html: project.html }}/>
			</div>
		</Layout>
	)
}
export default ProjectPage;

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: {slug: {eq: $slug } }) {
			html
			frontmatter {
				title
				status
				banner_image {
					publicURL
				}
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
