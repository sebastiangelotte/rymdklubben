import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import styled from 'styled-components'

import NeonLogo from '../components/NeonLogo'

export default () => (
	<Wrapper>
		<Header />
		<Navigation />
		<LogoWrapper>
			<NeonLogo />
		</LogoWrapper>
	</Wrapper>
)

const Wrapper = styled.div`
	background-color: #110f29;
	min-height: 100vh;
`

const LogoWrapper = styled.div`
	width: 80%;
	height: 200px;
	margin: auto;
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;

	* {
		width: 100%;
		transition: opacity 200ms ease-in-out;
	}
`
