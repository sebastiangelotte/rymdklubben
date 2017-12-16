import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
	<div>
		<Header />
		<Link to="/">Home</Link>
		<Link to="/Projects">The Alpha Archives</Link>
		<Footer />
	</div>
)
