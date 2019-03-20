import React from "react"


export default ({children}) => (
	<nav>
		<ul>
			<li><a href='#projects'>Projects</a></li>
			<li><a href='#bio'>Bio</a></li>
			<li><a href='#writing'>Writing</a></li>
			<li><a href='#graveyard'>Graveyard</a></li>
			<li><a href='#bye'>Bye</a></li>
		</ul>
		{children}
	</nav>
)