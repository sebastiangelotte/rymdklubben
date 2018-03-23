import React, { Component } from 'react'
import { HueStore } from '../stores/HueStore'
import HueDispatcher from '../dispatchers/HueDispatcher'
import styled from 'styled-components'

export default class Light extends Component {
	constructor (props) {
		super(props)
		this.props = props
	}

	componentDidUmnount () {
		HueStore.addListener('change', this.onChange)
	}

	componentWillUnmount () {
		HueStore.removeListener('change', this.onChange)
	}

	onChange = () => {
		this.setState(HueStore.getState())
	}

	turnOn = () => {
		HueDispatcher.dispatch({
			actionName: 'LIGHT_ON',
			data: this.props.lightId
		})
	}

	turnOff = () => {
		HueDispatcher.dispatch({
			actionName: 'LIGHT_OFF',
			data: this.props.lightId
		})
	}

	render () {
		return (
			<Wrapper>
				<p>{this.props.lightName}</p>
				<input type="button" onClick={this.turnOn} value="On" />
				<input type="button" onClick={this.turnOff} value="Off" />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	width: 200px;
	height: 200px;
	margin: 20px;
	background-color: #ff0069;
	display: flex;
	flex-direction: column;
	align-items: center;
`
