import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
	return (
		<section>
			Contact Me Section{' '}
			<Link to='/contact'>Send Me an Email</Link>
		</section>
	)
}
