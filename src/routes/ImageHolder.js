import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import App from '../components/ImageHolder'


export default () => (
	<Wrapper>
		<Header />
		<Navigation />
      	<App />
		<Footer />
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	height: 100vh;
	overflow: hidden;
`
