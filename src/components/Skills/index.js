import React from 'react';

function Skills() {
	return (
		<div>
			<span>My Skills</span>
			<div className='container'>
				<div className='row align-items-start'>
					<div className='col'>SWE Team Management</div>
					<div className='col'>Front-end</div>
					<div className='col'>Back-end</div>
				</div>
				<div className='row align-items-center'>
					<div className='col'>
						Managing 20-30 Engineers working on 5+ projects at a time
					</div>
					<div className='col'>HTML, CSS, JavaScript</div>
					<div className='col'>JavaScript, Express, Node</div>
				</div>
				<div className='row align-items-end'>
					<div className='col'>3 years plus experience as Manager</div>
					<div className='col'>React</div>
					<div className='col'>SQL, NoSQL, CRUD, APIs</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
