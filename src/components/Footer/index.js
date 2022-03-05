import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faGithub,
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className='row d-flex footer'>
			<div className='footer-text'>
				<span>Get connected with me on social networks</span>
				<div className='footer-icons'>
					<a
						href='https://www.linkedin.com/in/fernando-ortega-4159b2a3/'
						className='me-4'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
					</a>
					<a
						href='https://github.com/Feortegas'
						className='me-4'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
					</a>
					<a
						href='https://twitter.com/Fe_orteguinha'
						className='me-4'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					</a>
					<a
						href='https://www.facebook.com/profile.php?id=100003876509107'
						className='me-4'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
					</a>
					<a
						href='https://www.instagram.com/orteguinha/'
						className='me-4'
						target='_blank'
						rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
					</a>
				</div>
			</div>
			<div>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
					<path
						fill='#00cba9'
						fill-opacity='1'
						d='M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,144C672,149,768,203,864,218.7C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
				</svg>
			</div>
		</div>
	);
}

export default Footer;
