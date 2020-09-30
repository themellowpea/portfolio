import React from 'react'
import { Switch, Route } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MyForm from './Contact/ContactForm/MyForm'

function App() {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/contact' component={MyForm} />
			</Switch>
		</div>
	)
}

export default App
