import React from 'react';
import Project from '../ProjectList';

function Projects() {
	const projectArr = [
		{
			image: '../../assets/projects/reddit-lite.png',
			name: 'reddit-lite.png',
			description:
				'Light version of reddit.com. Focus of the application is for the user that is not a die-hard reddit user to be able to focus on the posts and comments only. It also benefits communities where internet connection speed is not as fast as in rich countries.',
			url: 'https://afternoon-tundra-62298.herokuapp.com/'
		}
		// {
		// 	image: '',
		// 	name: '',
		// 	description: '',
		// 	url: '',
		// },
		// {
		// 	image: '',
		// 	name: '',
		// 	description: '',
		// 	url: '',
		// },
		// {
		// 	image: '',
		// 	name: '',
		// 	description: '',
		// 	url: '',
		// },
		// {
		// 	image: '',
		// 	name: '',
		// 	description: '',
		// 	url: '',
		// },
		// {
		// 	image: '',
		// 	name: '',
		// 	description: '',
		// 	url: '',
		// },
	];

	return (
		<section>
			{projectArr.map((eachProject) => {
				return <Project project={eachProject} />;
			})}
		</section>
	);
}

export default Projects;
