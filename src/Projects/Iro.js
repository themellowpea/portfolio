import React from 'react'
const img = require('../images/iro-branding_400x400.png')
export default function Iro() {
	return (
		<div className='project'>
			<div className='img__ctn'>
				<img
					className='project__img'
					src={img}
					alt='Iro - Spaced Repetition app'
				/>
			</div>
			<div className='project__info'>
				<h3>Iro</h3>
				<p>
					This was a tag-team spaced repetion learning
					project, emphasizing branding and
					design.Full-stack application that utilizes React
					and Node.js and PostGreSQL database, deployed on
					Heroku.
				</p>
				<p>
					Tech: React, JavaScript, Node.js, Mocha/Chai,
					CORS, JWT, PostgreSQL, Heroku, Vercel CLI
				</p>
				<hr />
				<h4>Links</h4>
				<ul className='project__links'>
					<li>
						<a
							href='https://github.com/themlp101/Iro-client'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href='https://iro-client.vercel.app/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Demo
						</a>
						<div className='project__link__credentials'>
							<p>Credentials:</p>
							<p>Username: admin</p>
							<p>Password: pass</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}
