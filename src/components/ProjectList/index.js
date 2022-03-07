import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
	const name = props.project.name;
	const image = props.project.image;
	const description = props.project.description;
	const url = props.project.url;
	const github = props.project.github;
	return (
		<div className='col-12 col-md-6 col-lg-4 card-group'>
			<div className='card project-cards'>
				<img
					className='card-img-top'
					src={require(`../../assets/projects/${image}`)}
					alt={name}
				/>
				<div className='card-body project-cards-body'>
					<h5 className='card-title'>
						{' '}
						<a href={url} target='_blank' rel='noopener noreferrer'>
							<h5>{name}</h5>
						</a>
					</h5>
					<p className='card-text'>{description}</p>
					<div className='card-icons'>
						<a
							href={github}
							className='me-4'
							target='_blank'
							rel='noopener noreferrer'>
							<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
						</a>
						<span className='card-footer text-muted'>GitHub Repository</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Project;
