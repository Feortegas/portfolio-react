import React from 'react';

function Project(props) {
	const name = props.project.name;
	const image = props.project.image;
	const description = props.project.description;
	const url = props.project.url;
	return (
		<div className='col-6'>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				<h5>{name}</h5>
			</a>
			<img
				className='project-image'
				src={require(`../../assets/projects/${image}`)}
				alt={name}
			/>
			<p>{description}</p>
		</div>
	);
}

export default Project;
