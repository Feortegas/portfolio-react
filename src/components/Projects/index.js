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
							target='_blank'>
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
			<div className='section-break'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#00cba9'
						d='M0,96L80,90.7C160,85,320,75,480,106.7C640,139,800,213,960,208C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
				</svg>
			</div>
		</div>
	);
}

export default Projects;
