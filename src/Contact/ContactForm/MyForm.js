// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React, { useState } from 'react'
import './MyForm.css'
export default function MyForm() {
	const [status, setStatus] = useState('')
	const submitForm = (ev) => {
		ev.preventDefault()
		const form = ev.target
		const data = new FormData(form)
		const xhr = new XMLHttpRequest()
		xhr.open(form.method, form.action)
		xhr.setRequestHeader('Accept', 'application/json')
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return
			if (xhr.status === 200) {
				form.reset()
				setStatus('SUCCESS')
			} else {
				setStatus('ERROR')
			}
		}
		xhr.send(data)
	}
	return (
		<>
			<form
				className='contact__me__form'
				onSubmit={submitForm}
				action='https://formspree.io/myynebgp'
				method='POST'
			>
				<h1>
					Have something interesting to share? I'm excited
					to get in touch!
				</h1>
				<label htmlFor='name'>Name:</label>
				<input id='name' type='text' name='name' required />
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					type='email'
					name='email'
					required
				/>
				<label htmlFor='message'>Message:</label>
				<textarea
					id='message'
					type='text'
					name='message'
					required
				/>
				{status === 'SUCCESS' ? (
					<p>Thanks!</p>
				) : (
					<button>Submit</button>
				)}
				{status === 'ERROR' && (
					<p>Ooops! There was an error.</p>
				)}
			</form>
		</>
	)
}
