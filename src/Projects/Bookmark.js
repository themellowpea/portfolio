import React from 'react'

const img = require('../images/bookmark-app_400x400.png')

export default function Bookmark() {
	return (
		<div className='project'>
			<div className='img__ctn'>
				<img
					className='project__img'
					src={img}
					alt='My jQuery Bookmark App'
				/>
			</div>

			<div className='project__info'>
				<h3>jQuery Bookmark App</h3>
				<p>
					I used jQuery to build a simple single-page
					bookmark app with a dark theme. Uses webpack to
					manage a store and files.
				</p>
				<p>Tech: HTML5, CSS3, JavaScript, jQuery</p>
				<hr />
				<h4>Links</h4>
				<ul className='project__links'>
					<li>
						<a
							href='https://github.com/themlp101/mattP-bookmark-app'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href='https://themlp101.github.io/mattP-bookmark-app/'
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
