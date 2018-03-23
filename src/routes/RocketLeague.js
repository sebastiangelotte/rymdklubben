import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => (
	<Wrapper>
		<Header />
		<Message>
      Coming soon
		</Message>
		<Footer />
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	min-height: 100vh;
  overflow: hidden;
`

const Message = styled.h2`
	font-weight: 400;
  font-family: monospace;
	color: #FFF;
  text-align: center;
  padding: 50px 0;
`
