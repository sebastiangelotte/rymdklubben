import React from 'react'
import styled from 'styled-components'
const borderImage = require('../assets/heartbeat_rocket_border.svg')

export default () => (
	<Footer>
		<Border src={borderImage} />
		<Masthead>Rymdklubben 2017-2018</Masthead>
	</Footer>
)

const color = '#1b1935'
const backgroundColor = '#16142f'

const Footer = styled.div`
	width: 100%;
	position: fixed;
	bottom: 0;
	color: #FFF;
	font-family: monospace;
	letter-spacing: 2px;
	display: flex;
	align-items: center;
	flex-direction: column;
`
const Border = styled.img`
	width: 100%;
	position: relative;
	bottom: -1px;
`

const Masthead = styled.div`
	padding: 30px;
	width: 100%;
	text-align: center;
	background-color: ${backgroundColor};
`
