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
							className='btn btn-outline-success'
							href='#Skills'
							role='button'
							onClick={() => setContactSelected(false)}>
							<FontAwesomeIcon icon={faMandalorian} />
							Hire me
						</a>
						<a
							className='btn btn-outline-success'
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
