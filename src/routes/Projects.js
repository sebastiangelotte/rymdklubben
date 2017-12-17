import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

export default () => (
	<div>
		<Header />
		<Navigation />
		<Message>
			These items, previously unreleased and protected, are now free for the world to benefit from.
		</Message>
		<Footer />
	</div>
)

const Message = styled.div`
	font-weight: bold;
`
