import React from "react"
import Header from "./header"
import Navigation from "./navigation"
import Footer from "./footer"

export default ({ children }) => (
	<div>
		<Header/>
		<Navigation/>
		{children}
		<Footer/>
	</div>
)