import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!errorMessage) {
			console.log('Submit Form', formState);
		}
	};

	const handleChange = (e) => {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Your email is invalid.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
			console.log('Handle Form', formState);
		}
	};

	return (
		<section className='contact'>
			<h1>Contact me</h1>
			<form id='contact-form' onSubmit={handleSubmit}>
				{/* Name */}
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						name='name'
						defaultValue={name}
						onBlur={handleChange}
						className='form-control'
					/>
				</div>
				{/* email */}
				<div className='mb-3'>
					<label htmlFor='email' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='email-box'
						aria-describedby='emailHelp'
						defaultValue={email}
						onBlur={handleChange}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				{/* Message */}
				<div className='mb-3'>
					<label htmlFor='message' className='form-label'>
						Message
					</label>
					<textarea
						name='message'
						className='form-control'
						id='message-box'
						rows='5'
						defaultValue={message}
						onBlur={handleChange}
					/>
				</div>
				{errorMessage && (
					<div>
						<p className='error-text'>{errorMessage}</p>
					</div>
				)}
				<button
					type='submit'
					className='btn btn-outline-success'
					data-testid='button'>
					Submit
				</button>
			</form>
		</section>
	);
}

export default ContactForm;
