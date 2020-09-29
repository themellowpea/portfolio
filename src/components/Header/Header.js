import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
	return (
		<header className='main__header is-transparent'>
			<nav className='navigation'>
				<img
					className='my__logo'
					src={require('../../images/portfolio-logo.png')}
				></img>

				<Link to='/contact'>Contact Me</Link>
			</nav>
		</header>
	)
}
