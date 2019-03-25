import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"

import '../styles/index.scss'


export default ({data}) => (
	<Layout class='index-page' header='ShelSoloa' subheader='~'>
		<div 
			css={css`
				height: 30vh;
				width: 60vw;
			`}
		>

			{/* Navigation Links */}
			<Link to='/projects'>Projects</Link>
			<Link to='/blog'>Writing</Link>

			<p>Homepage</p>

			<h1 href='http://twitter.com/_shellbot_'>&#x2B22;</h1>

			<i></i>
		</div>
	</Layout>
)