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
				<p>Project description</p>
			</div>
		</div>
	)
}
