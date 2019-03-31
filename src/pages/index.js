import React from "react"

import Layout from "../components/layout"

import '../styles/index.scss'


export default ({data}) => (
	<Layout class='index-page' header='' subheader=''>
		<img class='logo' alt="It's Shel Soloa" description='My personal logo'/>
		<h1 class='wordmark'>ShelSoloa</h1>
		<blockquote>Booking is currently CLOSED<br/>Availability opening in May</blockquote>

		<p>This is the development journal of Sheldon Soloa.<br/>Here you can get an overview of my projects, writing, and the occasional update.</p>

		<hr/>

		<h2>Featured Projects</h2>
		<div class='featured-projects'>
			<div class='preview'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h4 class='preview__title'>GameDevInspo</h4>
				<hr/>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</div>
			<div class='preview'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h4 class='preview__title'>GameDevInspo</h4>
				<hr/>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</div>
			<div class='preview'>
				<img class='preview__image' alt='gamedevinspo logo'/>
				<h4 class='preview__title'>GameDevInspo</h4>
				<hr/>
				<p class='preview__description'>GDI is a content curation blog ran by shel.</p>
			</div>
		</div>
	</Layout>
)