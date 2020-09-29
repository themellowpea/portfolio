import React from 'react'
import {
	HiOutlinePhotograph,
	HiOutlineDesktopComputer,
	HiOutlineTerminal,
} from 'react-icons/hi'
import './AboutMe.css'

export default function AboutMe() {
	return (
		<section>
			<h1>
				Full-Stack Devloper, UI/UX Designer & Friendly
				Neighborhood Socialist
			</h1>
			<h2>
				I design and build small useful web apps and love
				learning new technologies
			</h2>
			<img
				className='my-portrait'
				src={require('../images/my-portrait.jpg')}
			/>
			<article className='about__me'>
				<div className='about__me__text__ctn'>
					<h3>Hi! I'm Matt, nice to meet you!</h3>
					<p>
						I am a software developer with full-stack
						experience, including JavaScript and PERN
						stack proficiencies. I've built several web
						applications remotely on small teams in the
						Thinkful Software Engineering Immersion
						Program, learning and developing skills to
						create digital products for an array of uses.
					</p>
					<p>
						I am a natural student, eager to always learn
						new things and looking forward to the next
						problem to solve.
					</p>
				</div>
			</article>
			<section className='skills'>
				<div className='col first'>
					<HiOutlinePhotograph className='skills__icn' />
					<h4>Designer</h4>
					<p>
						I value simple, elegant design patterns that
						include thoughtful interactions.
					</p>
					<h5>What I design:</h5>
					<p>UI, UX, web/mobile apps, logos</p>
					<h5>Tools: </h5>
					<ul className='tools'>
						<li>Figma</li>
						<li>Pen & Paper</li>
						<li>Sketch</li>
					</ul>
				</div>
				<div className='col'>
					<HiOutlineDesktopComputer className='skills__icn' />
					<h4>Front-End Developer</h4>
					<p>
						I love to bring ideas to life on the browser.
						Building useful applications from scratch is a
						passion.
					</p>
					<h5>Languages I speak: </h5>
					<p>JavaScript, React.js, jQuery, HTML5, CSS3</p>
					<h5>Tools:</h5>
					<ul className='tools'>
						<li>VS Code</li>
						<li>GitHub</li>
						<li>Codepen</li>
						<li>Terminal</li>
						<li>Chrome Dev Tools</li>
						<li>Vercel CLI</li>
						<li>Enzyme</li>
					</ul>
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
					<p>JavaScript, Node.js, PostgreSQL</p>
					<h5>Tools:</h5>
					<ul className='tools'>
						<li>Mocha</li>
						<li>Chai</li>
						<li>CORS</li>
						<li>Helmet</li>
						<li>Heroku</li>
					</ul>
				</div>
			</section>
		</section>
	)
}
