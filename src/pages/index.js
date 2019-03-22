import React from "react"
import Layout from "../components/layout"
import Divider from "../components/divider"
import ProjectLink from "../components/project-link"

export default () => (
	<Layout>
		<Divider title='Projects' subtitle="The things I've made">
			<ProjectLink background='url(http://picsum.photos/100)' label='gamedevinspo' to='#bio' />
			<ProjectLink background='url(http://picsum.photos/100)' label='gamedevinspo' to='#bio' />
			<ProjectLink background='url(http://picsum.photos/100)' label='gamedevinspo' to='#bio' />
		</Divider>
		<Divider title='Bio'>
		</Divider>
		<Divider title='Writing' subtitle="These things I've written">
		</Divider>
		<Divider title='Graveyard' subtitle="The things that didn't make it">
		</Divider>
	</Layout>
)