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
		<div className='skills'>
			<h1>My Skills</h1>
			<div className='d-flex skills-container'>
				{/* Frontend skills */}
				<div className='my-4'>
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
				<div className='my-4'>
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
				<div className='my-4'>
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
				<div className='my-4'>
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
			</div>
		</div>
	);
}

export default Skills;
