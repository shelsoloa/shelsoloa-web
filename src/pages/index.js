import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import MoreButton from "../components/more-button"

import '../styles/index.scss'

import GDI_logo from '../data/img/img_GDI__logo.png'
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
		<div class='featured-projects'>
			<a className='project-preview' href='http://gamedevinspo.com'>
				<img class='preview__image' alt='gamedevinspo logo' src={GDI_logo}/>
				<h3 class='preview__title'>GameDevInspo</h3>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</a>
			<Link className='project-preview' to='/'>
				<img class='preview__image' alt='gamedevinspo logo' src={GDI_logo}/>
				<h3 class='preview__title'>GameDevInspo</h3>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</Link>
			<Link className='project-preview' to='/'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h3 class='preview__title'>GameDevInspo</h3>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</Link>
		</div>
		<br/>
		<MoreButton to='/projects'/>

		<br/>
		<br/>
		<hr/>
		<br/>

		<h1>Latest Posts</h1>
		<div class='latest-posts'>
			{data.allMarkdownRemark.edges.map(({ node }) => (
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