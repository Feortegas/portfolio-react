import React from 'react';
import redditLite from '../../assets/projects/reddit-lite.png';

function Projects() {
	return (
		<div>
			<span>My Projects</span>
			<div className='container'>
				<div>
					<div className='col'>Title: Reddit-lite</div>
					{/* Project number 1 */}
					<div>
						<a
							href='https://afternoon-tundra-62298.herokuapp.com/'
							target='_blank'
							rel='noopener noreferrer'>
							<img
								src={redditLite}
								alt='Reddit-lite homepage'
								style={{ height: 300, width: 300 }}
							/>
						</a>
						<div>
							<h3>reddit-light website</h3>
							<p>
								Light version of reddit.com. Focus of the application is for the
								user that is not a die-hard reddit user to be able to focus on
								the posts and comments only. It also benefits communities where
								internet connection speed is not as fast as in rich countries.
							</p>
						</div>
					</div>
				</div>
				<div className='row align-items-end'>
					<div className='col'>
						HTML, CSS, Bootstrap, JavaScript, MySQL, CRUD, Node, Express
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
