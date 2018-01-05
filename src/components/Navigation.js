import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default () => (
	<NavList>
		<NavListItem>
			<StyledLink to="/">Home</StyledLink>
		</NavListItem>
		<NavListItem>
			<StyledLink to="/Projects">The Alpha Archives</StyledLink>
		</NavListItem>
		<NavListItem>
			<StyledLink to="/Launches">Space launches</StyledLink>
		</NavListItem>
	</NavList>
)

const NavList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
`

const NavListItem = styled.li`
	padding: 20px;
`

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #FFF;
	font-family: monospace;
	font-size: 16px;

	&:hover {
		text-decoration: underline;
	}
`
