import React from 'react';
import Project from '../ProjectList';

function Projects() {
	const projectArr = [
		{
			image: 'reddit-lite.png',
			name: 'reddit-lite',
			description: 'Light version of reddit.com.',
			url: 'https://afternoon-tundra-62298.herokuapp.com/',
			github: 'https://github.com/Feortegas/reddit-clone',
		},
		{
			image: 'spotitube.png',
			name: 'SpotiTube',
			description: 'Insert Spotify playlist into a YouTube playlist.',
			url: 'https://feortegas.github.io/SpotiTube/',
			github: 'https://github.com/Feortegas/SpotiTube',
		},
		{
			image: 'run-buddy.jpg',
			name: 'Run-Buddy',
			description:
				'Run buddy is your portal to connect to your personal trainner.',
			url: 'https://feortegas.github.io/run-buddy/',
			github: 'https://github.com/Feortegas/run-buddy',
		},
		{
			image: 'city-weather-dashboard.png',
			name: 'City Weather Dashboard',
			description: 'Current weather for your local city or future destination.',
			url: 'https://feortegas.github.io/city-weather-dashboard/',
			github: 'https://github.com/Feortegas/city-weather-dashboard',
		},
		{
			image: 'code-quiz.png',
			name: 'Classic Action Movies Quiz',
			description: 'Enjoy a short Classic Action Movies Quiz.',
			url: 'https://feortegas.github.io/code-quiz-classic-movies/',
			github: 'https://github.com/Feortegas/code-quiz-classic-movies',
		},
		{
			image: 'work-day-scheduller.png',
			name: 'Work day scheduller',
			description: `Plan your day appointments and to-do's.`,
			url: 'https://feortegas.github.io/whats-up-today/',
			github: 'https://github.com/Feortegas/whats-up-today',
		},
	];

	return (
		<section className='projects row g-4'>
			<h1>My Projects</h1>
			{projectArr.map((eachProject) => {
				return (
					<div key={eachProject.name} className='col-12 col-md-6 col-lg-4 card-group'>
						<Project project={eachProject} />
					</div>
				);
			})}
		</section>
	);
}

export default Projects;
