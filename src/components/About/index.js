import React, { useEffect } from 'react';
import profileImage from '../../assets/profile/profile-img-filled.png';
import resume from '../../assets/profile/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHandshakeAngle,
	faLayerGroup,
	faJedi,
	faFile,
} from '@fortawesome/free-solid-svg-icons';
import { faMandalorian } from '@fortawesome/free-brands-svg-icons';

function About(props) {
	const { setContactSelected, setSkillsSelected } = props;

	return (
		<section className='pt-5 container-fluid'>
			<div className='row'>
				<div className='col-8 mt-2 '>
					<p className='profile-text'>
						Hello, I'm Fernando
						<br></br>
						<br></br>
						<FontAwesomeIcon icon={faHandshakeAngle} />
						Software Engineering Manager
						<br></br>
						<FontAwesomeIcon icon={faLayerGroup} />
						Full Stack Web Developer
						<br></br>
						<br></br>
						<FontAwesomeIcon icon={faJedi} />
						<i>Do, or do not, there is no try.</i>
					</p>
					<div className='profile-text'>
						<a
							className='btn btn-outline-success hire-me-btn'
							href='#Skills'
							role='button'
							onClick={() => setContactSelected(false)}>
							<FontAwesomeIcon icon={faMandalorian} />
							Hire me
						</a>
						<a
							className='btn btn-outline-success hire-me-btn'
							href={resume}
							download='Fernando Ortega resume.pdf'
							role='button'
							onClick={() => setSkillsSelected(false)}>
							<FontAwesomeIcon icon={faFile} />
							Resume.pdf
						</a>
					</div>
				</div>
				<div className='col-4 mt-2'>
					{/* <svg
						className='profile-blob'
						viewBox='0 0 200 200'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							fill='#00cba9'
							d='M57.4,-51.7C72.4,-42.3,81.5,-21.1,79.5,-2C77.4,17.1,64.3,34.1,49.2,50.4C34.1,66.6,17.1,82,0.2,81.8C-16.7,81.6,-33.4,65.8,-47.1,49.6C-60.9,33.4,-71.7,16.7,-70.7,1.1C-69.6,-14.5,-56.6,-29.1,-42.8,-38.5C-29.1,-47.9,-14.5,-52.2,3.3,-55.5C21.1,-58.8,42.3,-61.1,57.4,-51.7Z'
							transform='translate(100 100)'
						/>
					</svg> */}
					{/* <img className='profile-image' src={profileImage} alt='my profile' /> */}
					<img
						src={profileImage}
						className='rounded-circle mx-auto profile-image'
						alt='this is me'
					/>
				</div>
			</div>
			{/* <div className='section-break'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#00cba9'
						d='M0,96L80,90.7C160,85,320,75,480,106.7C640,139,800,213,960,208C1120,203,1280,117,1360,74.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'></path>
				</svg>
			</div> */}
		</section>
	);
}

export default About;
