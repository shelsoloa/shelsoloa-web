import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"


import '../styles/about.scss'
import headshot from '../data/img/img_self.jpg'


export default ({ data }) => (
	<Layout class='about-page' header='About' subheader='thanks for your interest!'>

		<img class='headshot' src={headshot} alt='shel soloa headshot'/>
		<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>

	</Layout>
)


export const query = graphql`
	{
		markdownRemark (fileAbsolutePath: {regex: "/pages/about-writeup.md/"}) {
			html
		}
	}
`