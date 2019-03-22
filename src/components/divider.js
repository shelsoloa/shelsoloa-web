import React from "react"


export default props => (
	<div className='divider'>
		<div className='divider__header'>
			<h1>{props.title}</h1>
			<p>{props.subtitle}</p>
		</div>
		<div className='divider__content'>
			{props.children}
		</div>
	</div>
)