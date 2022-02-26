import React from 'react';
import profileImage from '../../assets/profile/profile-img.jpeg';

function About() {
	return (
		<section className='my-5'>
			<div className='d-flex justify-content-center'>
				<img
					src={profileImage}
					className='rounded-circle mx-auto'
					alt='this is me'
					style={{ height: 300, width: 300 }}
				/>
			</div>
			<div className='d-flex justify-content-center m-4'>
				<p>
					Hi, my name is Fernando Ortega. I am a Software Engineer Manager
					specialized in Industrial Automation, working on the industry for the
					past 18 years. With the revolution of web applications, I decided to
					improve my technical skills and become a full stack web developer.
					This is my Portfolio page. Enjoy it.
				</p>
			</div>
		</section>
	);
}

export default About;
