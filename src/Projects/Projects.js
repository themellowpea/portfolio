import React from 'react'
import Bookmark from './Bookmark'
import Homebl from './Homebl'
import Iro from './Iro'
import './Projects.css'

export default function Projects() {
	/**
	 * jQuery Bookmark app
	 * homebl
	 * iro
	 */
	return (
		<section>
			<header className='projects__header'>
				<h2>Older Projects</h2>
				<p>
					Here are a few projects I built during my time at
					Thinkful several years ago. We've come a long way since then :)
				</p>
			</header>
			<article className='projects'>
				<div className='projects__ctn'>
					<Bookmark />
					<Homebl />
					<Iro />
				</div>
			</article>
		</section>
	)
}
