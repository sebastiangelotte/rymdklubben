import React from 'react'
import { ImageStore }  from '../data/ImageStore'
import RymdklubbenDispatcher from '../data/RymdklubbenDispatcher'
import styled from 'styled-components'

export default class ImageHolder extends React.Component {
	constructor(props){
		super(props)
		this.state = ImageStore.getState()
		this.onChange = this.onChange.bind(this)
	}

	componentDidMount() {
		// Listen to store for change
		ImageStore.addListener('change', this.onChange)
	}

	componentWillUnmount() {
		// Remove listener on unmount
		ImageStore.removeListener('change', this.onChange)
	}

	onChange () {
		this.setState(ImageStore.getState())
	}

	nextImage () {
		RymdklubbenDispatcher.dispatch({
			actionName: 'NEXT_IMAGE',
			data: ''
		})
	}
	previousImage () {
		RymdklubbenDispatcher.dispatch({
			actionName: 'PREVIOUS_IMAGE',
			data: ''
		})
	}

	selectImage (imageIndex) {
		RymdklubbenDispatcher.dispatch({
			actionName: 'SELECT_IMAGE',
			data: imageIndex
		})
	}

	render () {
		return (
			<Wrapper>
				<div onClick={this.nextImage}>
					<MainImage src={this.state.activeImageURL} alt=''></MainImage>
				</div>
				<ThumbnailPicker style={{textAlign: "center"}}>
					<ImageButton onClick={this.previousImage}>&lt;</ImageButton>
					{this.state.imageURLs.map( (image, imageIndex) =>
						<ThumbnailImage key={imageIndex} src={image} onClick={() => this.selectImage(imageIndex)} alt=''></ThumbnailImage>
					)}
					<ImageButton onClick={this.nextImage}>&gt;</ImageButton>
				</ThumbnailPicker>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	padding: 50px;
	text-align: center;
`

const MainImage = styled.img`
	height: 400px;
	width: 100%;
	max-width: 600px;
	cursor: pointer;
	padding: 20px;
`

const ThumbnailPicker = styled.div`
	display: flex;
	justify-content: center;
`

const ThumbnailImage = styled.img`
	max-height: 100px;
	max-width: 100px;
	padding: 20px;
	background-color: #16142f;
    border: 2px solid #1b1935;
	margin: 2px;
	cursor: pointer;
`

const ImageButton = styled.div`
	cursor: pointer;
	font-family: monospace;
	color: #FFF;
	font-size: 40px;
	align-self: center;
	padding: 0 20px;
`
