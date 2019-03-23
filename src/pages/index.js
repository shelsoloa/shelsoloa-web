import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Divider from "../components/divider"
import ProjectLink from "../components/project-link"

export default ({data}) => (
	<Layout>
		<Divider title='Projects' subtitle="Where I'm at">
			<ProjectLink background='url(http://picsum.photos/100)' label='gamedevinspo' to='#bio' description='gamedevinspoinspo'/>
			<ProjectLink background='url(http://picsum.photos/100)' label='gamedevinspo' to='#bio' description='podcast'/>
			<ProjectLink background='url(http://picsum.photos/100)' label='gamedevinspo' to='#bio' description='game'/>
		</Divider>
		<Divider title='Bio' subtitle="About me">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget metus scelerisque diam hendrerit ultrices eget sit amet augue. Donec aliquam ornare felis, sed suscipit dolor elementum eget. Integer nunc nisl, varius ac condimentum vitae, tristique ut leo. Nulla massa dui, pretium quis nibh vitae, lacinia porta urna. Praesent dictum dignissim augue, ut feugiat elit interdum non. Integer at auctor mauris. Pellentesque consequat felis lectus, ac vehicula leo feugiat id. In dapibus ut nisl vel porttitor.</p>
		</Divider>
		<Divider title='Writing' subtitle="These things I've written">
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<Link to={node.fields.slug}>
						<h3>{node.frontmatter.title}</h3>
						<p>{node.excerpt}</p>
						<p>{node.frontmatter.date}</p>
					</Link>
				</div>
			))}
		</Divider>
		<Divider title='Graveyard' subtitle="The things that didn't make it">
		</Divider>
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