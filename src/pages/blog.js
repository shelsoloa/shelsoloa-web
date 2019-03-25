import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import '../styles/blog.scss'

export default () => (
	<Layout class='blog-page' header='Blog' subheader='~/blog/'>

		<Link to='/'>Home</Link>
		<Link to='/projects'>Projects</Link>

		<p>Blog entries</p>
	</Layout>
)