import React from "react"
import { graphql } from "gatsby"
import HexBackground from "./hexagon-background"


export default () => (
	<header>
		<HexBackground rows={10} columns={25}/>	
		<div class='header__content'>
			<h1 class='header__title'>Shel Soloa</h1>
		</div>
	</header>
)