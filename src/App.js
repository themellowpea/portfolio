import React from 'react'
import { Switch, Route } from 'react-router'
import './App.css'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MyForm from './Contact/ContactForm/MyForm'

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/portfolio' component={Home} />
				<Route path='/contact' component={MyForm} />
			</Switch>
		</div>
	)
}

export default App
