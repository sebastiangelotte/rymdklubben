import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import ImageHolder from '../components/ImageHolder'
import styled from 'styled-components'

import Logo from '../assets/Rymdklubben_neon.js'

export default () => (
	<Wrapper>
		<Header />
		<Navigation />
		<Image />
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	min-height: 100vh;
`

const Image = styled(Logo)`
	width: 80%;
	margin: auto;
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;
`
