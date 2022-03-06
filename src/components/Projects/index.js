import React from 'react';
import Project from '../ProjectList';

function Projects() {
	const projectArr = [
		{
			image: 'reddit-lite.png',
			name: 'reddit-lite',
			description:
				'Light version of reddit.com. Focus of the application is for the user that is not a die-hard reddit user to be able to focus on the posts and comments only. It also benefits communities where internet connection speed is not as fast as in rich countries.',
			url: 'https://afternoon-tundra-62298.herokuapp.com/',
		},
		{
			image: 'spotitube.png',
			name: 'SpotiTube',
			description:
				'SpotiTube web app, allows the user to Search for a Spotify playlist and then insert the tracks to a YouTube playlist (Official videos). Its a colaboration between the Spotify API and YouTube API.',
			url: 'https://feortegas.github.io/SpotiTube/',
		},
		{
			image: 'run-buddy.jpg',
			name: 'Run-Buddy',
			description: 'Run buddy is your portal to connect to your personal trainner and become the journey of getting fit',
			url: 'https://feortegas.github.io/run-buddy/',
		},
		{
			image: 'city-weather-dashboard.png',
			name: 'City Weather Dashboard',
			description: 'Search for the current weather for your local city or future destination. Get also 5 days	Forecast',
			url: 'https://feortegas.github.io/city-weather-dashboard/',
		},
		{
			image: 'code-quiz.png',
			name: 'Classic Action Movies Quiz',
			description: 'Enjoy a short Classic Action Movies Quiz. Think fast or you will run out of time!',
			url: 'https://feortegas.github.io/code-quiz-classic-movies/',
		},
		{
			image: 'work-day-scheduller.png',
			name: 'Work day scheduller',
			description: `Plan your day appointments and to-do's with this Day Scheduller web app`,
			url: 'https://feortegas.github.io/whats-up-today/',
		},
	];

	return (
		<section className='row d-flex'>
			{projectArr.map((eachProject) => {
				return <Project project={eachProject} />;
			})}
		</section>
	);
}

export default Projects;
