import React from 'react'
import styled from 'styled-components'

export default class Filter extends React.Component {

	render() {
		return (
      <div>
        <TempMessage>Upcoming launches</TempMessage>
        <Wrapper>[Filter coming soon]</Wrapper>
      </div>
		)
	}
}

// CSS
const TempMessage = styled.h2`
    font-size: 2em;
    color: #FFF;
    padding-left: 20px;
    font-weight: 400;
    text-transform: uppercase;
`

const Wrapper = styled.div`
	height: 20px;
	position: relative;
	overflow: hidden;
	background: rgba(0,0,0,0.3);
	color: #FFF;
	border-radius: 2px;
	margin: 15px;
	padding: 30px 40px;
	display: flex;
	flex-direction: column;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
	}
`
