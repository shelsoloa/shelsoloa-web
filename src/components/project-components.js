import React from "react"
import { Link } from "gatsby"


import "./project-components.scss"


const ProjectsSection = props => (
	<div class='projects-section'>
		{props.children}
	</div>
)


const ProjectPreview = props => (
	<Link className='project-preview' to={props.to}>
 		<img class='preview__image' src={props.image} alt={props.image_alt}/>
 		<h3 class='preview__title'>{props.title}</h3>
 		<p class='preview__description'>{props.description}</p>
	</Link>
)

export {ProjectsSection, ProjectPreview}