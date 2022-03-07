import React from 'react';
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
		<section className='profile d-flex pt-5'>
			{/* Profile image section */}
			<div className='profile-image'>
				<img
					src={profileImage}
					className='rounded-circle'
					alt='this is me'
				/>
			</div>
			{/* About me section */}
			<div className='profile-text'>
				<p>
					Hello, I'm <span className='my-name'>Fernando</span>
					<br></br>
					<br></br>
					<FontAwesomeIcon icon={faHandshakeAngle} />
					<span> Software Engineering Manager</span>
					<br></br>
					<FontAwesomeIcon icon={faLayerGroup} />
					<span> Full Stack Web Developer</span>
					<br></br>
					<br></br>
					<FontAwesomeIcon icon={faJedi} />
					<span> Do, or do not, there is no try.</span>
				</p>
				{/* Buttons section */}
				<a
					className='btn btn-outline-success m-3'
					href='#Skills'
					role='button'
					onClick={() => setContactSelected(false)}>
					<FontAwesomeIcon icon={faMandalorian} />
					<span className='btn-outline-success'> Hire me</span>
				</a>
				<a
					className='btn btn-outline-success'
					href={resume}
					download='Fernando Ortega resume.pdf'
					role='button'
					onClick={() => setSkillsSelected(false)}>
					<FontAwesomeIcon icon={faFile} />
					<span className='btn-outline-success'> Resume.pdf</span>
				</a>
			</div>
		</section>
	);
}

export default About;
