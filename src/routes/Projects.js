import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

export default () => (
	<Wrapper>
		<Header />
		<Navigation />
		<Message>
			These items, previously unreleased and protected, are now free for the world to benefit from.
		</Message>
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	min-height: 100vh;
`

const Message = styled.div`
	font-weight: bold;
	color: #FFF;
`
