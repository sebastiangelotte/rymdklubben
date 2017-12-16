import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
	<div>
		<Header />
		<Link to="/">Home</Link>
		<Link to="/Projects">The Alpha Archives</Link>
		<Message>
			These items, previously unreleased and protected, are now free for the world to benefit from.
		</Message>
		<Footer />
	</div>
)

const Message = styled.div`
	font-weight: bold;
`
