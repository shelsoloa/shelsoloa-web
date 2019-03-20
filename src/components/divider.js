import React from "react"


export default props => (
	<div>
		<h1>{props.name}</h1>
		{props.children}
	</div>
)