import React from 'react'
import styled from 'styled-components'

const Date = ({ date }) => {
	return (
		<Wrapper>
			<Day>
				{getDay(date)}
			</Day>
			<Month>
				{getMonth(date)}
			</Month>
		</Wrapper>
	)
}

export default Date

function getMonth(text) {
	const date = text.substr(0, text.indexOf(','))
	const month = date.substr(0, 3)
	return month
}

function getDay(text) {
	const date = text.substr(0, text.indexOf(','))
	const day = date.substr(text.indexOf(' '), text.length)
	return day
}

const Wrapper = styled.div`
	color: #FFF;
	position: absolute;
	left: -140px;
	top: 5px;
	width: 120px;
	text-align: right;
`

const Month = styled.h2`
	text-align: center;
	font-size: 2em;
	margin: 0;
	text-transform: uppercase;
`

const Day = styled.h2`
	text-align: center;
	font-size: 2.8em;
	margin: 0;
`
