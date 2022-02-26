import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
	return (
		<div>
			<Nav />
			<main>
				<About />
				<Skills />
				<Projects />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default App;
