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
				<p>Project description</p>
			</div>
		</div>
	)
}
