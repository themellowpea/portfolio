import React from 'react'
const img = require('../images/iro-branding_400x400.png')
export default function Iro() {
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
				<h3>Iro</h3>
				<p>Project description</p>
			</div>
		</div>
	)
}
