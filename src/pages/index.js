import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import '../styles/index.scss'

import logo_transparent from '../data/img/img_shelsoloa__logo--transparent.png'


export default ({data}) => (
	<Layout class='index-page' header='' subheader=''>
		<img class='logo' alt="It's Shel Soloa" description='My personal logo' src={logo_transparent}/>
		<h1 class='header center'>Shel Soloa</h1>
		<blockquote>Available for new contracts<br/></blockquote>

		<hr />

		<div class='showcase'>
			<div class='showcase__section latest-post'>
				<h2 class='showcase__section-title'>Latest Post</h2>

				<a class='showcase__link' href={data.mostRecentPost.fields.slug}>
					<h1 class='showcase__section-name'>{data.mostRecentPost.frontmatter.title}</h1>
					<p class='post__date'>{data.mostRecentPost.frontmatter.date}</p>
				</a>

				<div dangerouslySetInnerHTML={{ __html: data.mostRecentPost.html }}/>
			</div>

			<div class='showcase__section featured-project'>
				<h2 class='showcase__section-title'>Featured Work</h2>
				<a class='showcase__link' href={data.featuredProject.fields.slug}>
					<h1 class='showcase__section-name'>{data.featuredProject.frontmatter.title}</h1>
					<img class='project__preview'
						 src={data.featuredProject.frontmatter.preview_image.publicURL}
						 alt={data.featuredProject.frontmatter.title + ' preview image'}/>
				</a>
				<p>{data.featuredProject.frontmatter.subtitle}</p>
			</div>
		</div>

		<br/>
		<br/>
		<br/>
	</Layout>
)


export const query = graphql`
	query IndexQuery {
		featuredProject: markdownRemark(frontmatter: {tags: {in: "featured"}}) {
			fields {
				slug
			}
			frontmatter {
				title
				subtitle
				subtitle
				preview_image {
					publicURL
				}
				tags
			}
		}

		mostRecentPost: markdownRemark(frontmatter: {tags: {in: "latest"}}) {
			excerpt(pruneLength: 1000)
			fields {
				slug
			}
			frontmatter {
				title
				date(formatString: "YYYY")
			}
			html
		}
	}
`