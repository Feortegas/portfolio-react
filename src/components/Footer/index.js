import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faFacebook,
	faLinkedin,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<div className='main-footer text-center text-lg lg-start text-muted'>
			<div className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
				{/* Left */}
				<div className='me-5 d-none d-lg-block'>
					<span>Get connected with me on social networks</span>
				</div>
				{/* Left */}

				{/* Right */}
				<div>
					<a
						href='https://www.facebook.com/profile.php?id=100003876509107'
						className='me-4 text-reset'>
						<FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
					</a>
					<a href='https://twitter.com/Fe_orteguinha' class='me-4 text-reset'>
						<FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
					</a>
					<a
						href='https://www.instagram.com/orteguinha/'
						class='me-4 text-reset'>
						<FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
					</a>
					<a
						href='https://www.linkedin.com/in/fernando-ortega-4159b2a3/'
						class='me-4 text-reset'>
						<FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
					</a>
					<a href='https://github.com/Feortegas' class='me-4 text-reset'>
						<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
					</a>
				</div>
				{/* Right */}
			</div>
		</div>
	);
}

export default Footer;
