import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

import App from '../components/launches/App'


export default () => (
	<Wrapper>
		<Header />
      <App />
		<Footer />
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	height: 100vh;
  overflow: hidden;
`
