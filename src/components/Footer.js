import React from 'react'
import styled from 'styled-components'

export default () => (
	<Footer>2017</Footer>
)

const color = '#ff0069'

const Footer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 20px;
	border-top: 1px solid ${color};
	color: ${color};
`
