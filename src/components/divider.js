import React from "react"


export default props => (
	<div className='divider'>
		<h1>{props.title}</h1>
		<p>{props.subtitle}</p>
		<div className='divider__content'>
			{props.children}
		</div>
	</div>
)