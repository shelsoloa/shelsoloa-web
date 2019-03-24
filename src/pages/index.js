import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"

export default ({data}) => (
	<Layout header='ShelSoloa' subheader="~">
		<div 
			class='index_wrap'
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