import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaRegCopyright } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
	return (
		<section className='contact'>
			<div className='contact__me'>
				<h2>Get In Touch</h2>
				<p>
					Interested in working together? Or do you have an
					interesting opportunity for me?
				</p>
				<Link to='/contact'>Send Me an Email</Link>
			</div>
			<div className='social'>
				<h3>Move, Create, and Enjoy</h3>
				<a
					aria-label='GitHub'
					href='https://github.com/themlp101'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub className='contact__icn' />
				</a>
				<a
					aria-label='LinkedIn'
					href='https://www.linkedin.com/in/themlp101/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaLinkedin className='contact__icn' />
				</a>
			</div>

			<div className='copyright'>
				<p>
					Created by Me{' '}
					<FaRegCopyright className='copy__icn' />{' '}
					twentytwenty
				</p>
			</div>
		</section>
	)
}
