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
		<div className='row d-flex footer-bg pb-4'>
			<div className='footer-text'>
				<span>Get connected with me on social networks</span>
				<div className='icons'>
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
		</div>
	);
}

export default Footer;
