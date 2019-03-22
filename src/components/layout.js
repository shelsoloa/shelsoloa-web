import React from "react"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

export default ({ children }) => (
	<div className='layout'>
		<Header/>
		<div class='content-wrapper'>
			<Navigation/>
			<content>
				{children}
			</content>
			<div class='content-margin'/>
		</div>
		<Footer/>
	</div>
)