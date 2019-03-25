import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import '../styles/index.scss'


export default ({data}) => (
	<Layout class='index-page' header='ShelSoloa' subheader='~'>
		<div>

			{/* Navigation Links */}
			<Link to='/projects'>Projects</Link>
			<Link to='/blog'>Writing</Link>

			<p>Homepage</p>

			<h1 href='http://twitter.com/_shellbot_'>&#x2B22;</h1>

			<i></i>
		</div>
	</Layout>
)