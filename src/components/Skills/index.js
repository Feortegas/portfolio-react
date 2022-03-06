import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCode,
	faServer,
	faPeopleCarryBox,
	faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

function Skills() {
	return (
		<div>
			<h2 className='my-3'>My Skills</h2>
			<div className='skills-container row'>
				{/* Frontend skills */}
				<div className='my-skills col-6 my-4'>
					<div className='skills-title d-flex'>
						<FontAwesomeIcon className='skills-icon' icon={faCode} />
						<h3> Frontend developer</h3>
					</div>
					<ul className='mx-4'>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
						<li>Bootstrap</li>
						<li>Bulma</li>
						<li>React</li>
						<li>MVC</li>
					</ul>
				</div>
				{/* Backend skills */}
				<div className='my-skills col-6 my-4'>
					<div className='skills-title d-flex'>
						<FontAwesomeIcon className='skills-icon' icon={faServer} />
						<h3> Backend developer</h3>
					</div>
					<ul>
						<li>JavaScript</li>
						<li>Node.js</li>
						<li>Express.js</li>
						<li>CRUD operations</li>
						<li>NoSQL - MongoDB</li>
						<li>MySQL - ORM</li>
						<li>PWA</li>
					</ul>
				</div>
				{/* Management skills */}
				<div className='my-skills col-6 my-4'>
					<div className='skills-title d-flex'>
						<FontAwesomeIcon className='skills-icon' icon={faPeopleCarryBox} />
						<h3> SWE Manager</h3>
					</div>
					<ul>
						<li>People managing</li>
						<li>Managed 25+ Engineers</li>
						<li>Career Development plans</li>
						<li>Yearly Goals and Evaluations</li>
						<li>Resource Planning</li>
					</ul>
				</div>
				{/* General skills */}
				<div className='my-skills col-6 my-4'>
					<div className='skills-title d-flex'>
						<FontAwesomeIcon className='skills-icon' icon={faBookOpen} />
						<h3> General</h3>
					</div>
					<ul>
						<li>MS DevOps</li>
						<li>Agile Manifest</li>
						<li>Windows and Mac</li>
						<li>MS Office</li>
						<li>Project Management</li>
					</ul>
				</div>
				<div className='skills-blob'>
					{/* <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='#00CBA9'
							d='M29.3,-36.4C39.1,-33.3,48.8,-26.1,59.2,-14.4C69.6,-2.7,80.8,13.6,78.6,27.1C76.3,40.6,60.7,51.3,45.3,51.8C30,52.3,15,42.7,-1.3,44.4C-17.6,46.2,-35.1,59.3,-43.1,56.4C-51.1,53.5,-49.5,34.6,-51.3,19C-53.1,3.5,-58.2,-8.5,-57.6,-21.4C-57.1,-34.2,-50.9,-47.9,-40.3,-50.8C-29.8,-53.7,-14.9,-45.9,-2.6,-42.3C9.8,-38.8,19.6,-39.6,29.3,-36.4Z'
							transform='translate(100 100)'
						/>
					</svg> */}
				</div>
			</div>
		</div>
	);
}

export default Skills;
