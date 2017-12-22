import React from 'react'
import styled from 'styled-components'
const image = require('../rymdklubben.svg')


export default () => (
	<Header></Header>
)

const Header = styled.div`
	background-image: url('${image}');
	background-repeat: no-repeat;
	background-size: contain;
	height: 300px;
	max-width: 600px;
	transition: transform 0.2s ease-in-out;
	&:hover {
		cursor: help;
		transform: rotateZ(1deg);
	}
`
