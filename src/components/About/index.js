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
					{/* About me section */}
					<p className='profile-text'>
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
					<div className='profile-text'>
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
				</div>
				{/* Profile image section */}
				<div className='col-4 mt-2'>
					<img
						src={profileImage}
						className='rounded-circle mx-auto profile-image'
						alt='this is me'
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
