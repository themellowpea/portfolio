import React from 'react'
const img = require('../images/mobile-homebl_400x400.png')

export default function Homebl() {
	return (
		<div className='project'>
			<div className='img__ctn'>
				<img
					className='project__img'
					src={img}
					alt="My Homeshoppers' notebook app"
				/>
			</div>
			<div className='project__info'>
				<h3>Homebl</h3>
				<p>
					Built with Node.js and a PostgreSQL database with
					a React client front-end for a full-stack
					application. Utilizes user login/registration and
					authentication. Stateless React architecture using
					custom hooks. This app is perfect for homebuyers
					looking to keep track of their favorite homes over
					the course of their search, as well as build a
					list of notes for each home.
				</p>
				<p>
					Tech: React, Jest, JavaScript, Node.js,
					Mocha/Chai, CORS, JWT, PostgreSQL, Heroku, Vercel
					CLI
				</p>
				<hr />
				<h4>Links</h4>

				<ul className='project__links'>
					<li>
						<a
							href='https://github.com/themlp101/homebl-client'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href='https://homebl.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Demo
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
