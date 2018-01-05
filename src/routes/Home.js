import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import ImageHolder from '../components/ImageHolder'
import styled from 'styled-components'

export default () => (
	<Wrapper>
		<Header />
		<Navigation />
		<ImageHolder />
		<Footer />
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	min-height: 100vh;
`
