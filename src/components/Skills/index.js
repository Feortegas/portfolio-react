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
			{/* <div className='section-break'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#00cba9'
						d='M0,96L80,90.7C160,85,320,75,480,106.7C640,139,800,213,960,208C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
				</svg>
			</div> */}
		</div>
	);
}

export default Skills;
