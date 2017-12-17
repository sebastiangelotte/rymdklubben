import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => (
	<NavList>
		<NavListItem>
			<Link to="/">Home</Link>
		</NavListItem>
		<NavListItem>
			<Link to="/Projects">The Alpha Archives</Link>
		</NavListItem>
	</NavList>
)

const NavList = styled.ul`
	list-style: none;
	display: flex;
`

const NavListItem = styled.li`
	padding: 0 10px;
`
