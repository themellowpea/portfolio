import React from 'react'
import {
	// HiOutlinePhotograph,
	HiOutlineDesktopComputer,
	HiOutlineTerminal,
} from 'react-icons/hi'
import './AboutMe.css'

export default function AboutMe() {
	return (
		<section>
			<h1>
				Software Engineer, Full-Stack Devloper & Friendly
				Neighborhood Coder
			</h1>
			<img
				className='my-portrait'
				src={require('../images/my-portrait.jpg')}
				alt='Me sitting and smiling'
			/>
			<article className='about__me'>
				<div className='about__me__text__ctn'>
					<h3>Hi! I'm Matt, nice to meet you!</h3>
					<p>
					Hey there!
					I'm Matt, a groovy software
					engineer with a love for building elegant
					solutions to complex problems. Ever since I
					wrote my first "Hello, World!" program in a Google Chrome browser console, 
					I've been hooked on the thrill of creating
					innovative software that makes a difference.
					</p>
					<p>
					My journey into the world of coding started
					with my insatiable curiosity and a
					determination to turn ideas into reality. Over
					the years, I've honed my skills in various
					programming languages and technologies,
					constantly seeking out new challenges to
					expand my knowledge. What sets me apart is not
					just my technical expertise, but also my
					dedication to understanding the bigger
					picture. I believe that great software isn't
					just about lines of code—it's about solving
					real-world problems and making people's lives
					easier.
					</p>
					<p> When I'm not busy coding, you can find
					me kicking back with my pup, checking out the latest CRPG, 
					or playing the guitar.
					</p>
					<p> Thanks for stopping by, and feel
					free to reach out—I'm always up for a good
					conversation or the opportunity to work on
					something awesome together! --- Feel free to
					personalize and tweak this example to better
					reflect your own personality, experiences, and
					interests. The goal is to give visitors a
					glimpse into who you are beyond just your
					technical skills.
					</p>
				</div>
			</article>
			<section className='skills'>
				<div className='col'>
					<HiOutlineDesktopComputer className='skills__icn' />
					<h4>Front-End Developer</h4>
					<p>
						I love to bring ideas to life on the browser.
						Building useful applications from scratch is a
						passion.
					</p>
					<h5>Languages I speak: </h5>
					<p>JavaScript and the JS cinematic universe, 
						including but not limited to: Next.js, 
						Angular, Vue, React, Svelte, etc.</p>
				</div>
				<div className='col last'>
					<HiOutlineTerminal className='skills__icn' />
					<h4>Back-End Developer</h4>
					<p>
						Easy-to-maintain and simple back-ends that
						deliver information quickly to the front-end
						is paramount.
					</p>
					<h5>Languages I speak: </h5>
					<p>JavaScript: Node, Express</p>
					<p>C#, dotnet, Python, django</p>
				</div>
			</section>
		</section>
	)
}
