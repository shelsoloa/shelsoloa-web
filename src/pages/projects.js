import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProjectLink from "../components/project-link"

import '../styles/projects.scss';


export default () => (
	<Layout class='projects-page' header='Projects' subheader='~/projects/'>
	
		<ProjectLink 
			background='url(https://placeimg.com/100/100/any' 
			description='Test test test'
			label='gamedevinspo' 
		/>
		<ProjectLink 
			background='url(https://placeimg.com/100/100/any' 
			description='Test test test'
			label='agent obie' 
		/>
		<ProjectLink 
			background='url(https://placeimg.com/100/100/any' 
			description='Test test test'
			label='peachy' 
		/>
	</Layout>
)

