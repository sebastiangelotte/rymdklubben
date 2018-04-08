import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { media } from './utils/style-utils';

import Filter from './components/Filter'
import Item from './components/Item'
import CustomScrollbar from './components/CustomScrollbar'

const background = require('../../assets/bg.jpg')
const logo = require('../../assets/logo.svg')


class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: []
		}
	}

	async componentDidMount() {
		try{
			const res = await axios.get('https://www.rymdklubben.com/api/launches')
			const data = res.data
			this.setState({ data })
		} catch(err) {
			 console.log(err)
		}
	 }

	render() {
		return (
			<Root>
				<Controls>
          <Filter />
					<Masthead></Masthead>
				</Controls>
				<Wrapper>
					<CustomScrollbar>
						{this.state.data.map(item =>
							<Item key={item.id} data={item} />
						)}
					</CustomScrollbar>
				</Wrapper>
			</Root>
		)
	}
}


//CSS
const Root = styled.div`
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	font-family: 'Roboto', sans-serif;
	background-image: url('${ background }');
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	overflow: hidden;
	display: flex;
	flex-direction: row;

	${media.medium`
		flex-direction: column;
	`}
`

const Wrapper = styled.div`
	width: 70%;
	max-width: 800px;
	//overflow: initial;
	height: 100%;



	${media.medium`
		width: 100%;
		max-width: none;
	`}
`

const Controls = styled.div`
	width: 30%;
	min-width: 390px;
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);

	${media.medium`
		margin-left: 135px;
	`}
	${media.small`
		margin-left: 0px;
	`}
`

const Masthead = styled.div`
	background-image: url('${logo}');
	background-size: fit;
	background-repeat: no-repeat;
	position: absolute;
	bottom: 80px;
	left: 10px;
	color: #FFF;
	font-family: consolas;
	font-size: 13px;
	height: 200px;
	width: 200px;
	${media.medium`
		display: none;
	`}
`

export default App
