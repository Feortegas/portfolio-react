import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Error from './components/Error';

function App() {
	const [aboutSelected, setAboutSelected] = useState(true);
	const [skillsSelected, setSkillsSelected] = useState(false);
	const [projectsSelected, setProjectsSelected] = useState(false);
	const [contactSelected, setContactSelected] = useState(false);

	return (
		<div>
			<Nav
				aboutSelected={aboutSelected}
				setAboutSelected={setAboutSelected}
				skillsSelected={skillsSelected}
				setSkillsSelected={setSkillsSelected}
				projectsSelected={projectsSelected}
				setProjectsSelected={setProjectsSelected}
				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			/>
			<main className='main'>
				{aboutSelected ? (
					<About />
				) : skillsSelected ? (
					<Skills />
				) : projectsSelected ? (
					<Projects />
				) : contactSelected ? (
					<ContactForm />
				) : (
					<Error />
				)}
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
