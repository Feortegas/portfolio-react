import React from 'react';

function Nav(props) {
	const {
		setAboutSelected,
		aboutSelected,
		setSkillsSelected,
		skillsSelected,
		setProjectsSelected,
		projectsSelected,
		setContactSelected,
		contactSelected,
	} = props;

	function resetStates(event) {
		setAboutSelected(false);
		setSkillsSelected(false);
		setProjectsSelected(false);
		setContactSelected(false);
		if (event.target.textContent === 'About') {
			setAboutSelected(true);
			document.title = 'Fernando - About';
		} else if (event.target.textContent === 'Skills') {
			setSkillsSelected(true);
			document.title = 'Fernando - Skills';
		} else if (event.target.textContent === 'Projects') {
			setProjectsSelected(true);
			document.title = 'Fernando - Projects';
		} else if (event.target.textContent === 'Contact') {
			setContactSelected(true);
			document.title = 'Fernando - Contact';
		}
	}

	return (
		<nav className='navbar navbar-expand-lg'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					<span className='my-name'>Fernando Ortega</span>
				</a>
			</div>
			<div>
				<ul className='navbar-nav ms-auto align-items-center'>
					<li
						className={`nav-item me-4 ${aboutSelected && 'nav-active'}`}
						onClick={(event) => resetStates(event)}>
						About
					</li>
					<li
						className={`nav-item me-4 ${skillsSelected && 'nav-active'}`}
						onClick={(event) => resetStates(event)}>
						Skills
					</li>
					<li
						className={`nav-item me-4 ${projectsSelected && 'nav-active'}`}
						onClick={(event) => resetStates(event)}>
						Projects
					</li>
					<li
						className={`nav-item me-4 ${contactSelected} && 'nav-active'`}
						onClick={(event) => resetStates(event)}>
						Contact
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
