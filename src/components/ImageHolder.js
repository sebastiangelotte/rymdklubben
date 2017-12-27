import React from 'react'
import { ImageStore }  from '../data/ImageStore'
import RymdklubbenDispatcher from '../data/RymdklubbenDispatcher'

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
			<div style={{backgroundColor: "#110f29", padding: "50px", textAlign: "center"}}>
				<div onClick={this.nextImage}>
					<img src={this.state.activeImageURL} style={{height: "400px", width: "100%", maxWidth: "600px"}} alt=''/>
				</div>
				<div style={{textAlign: "center"}}>
					{this.state.imageURLs.map( (image, imageIndex) =>
						<img key={imageIndex} src={image} onClick={() => this.selectImage(imageIndex)} style={{height: "100px", maxWidth: "100px", padding: "20px"}} alt=''/>
					)}
				</div>
				<div>
					<input type="button" value="<" onClick={this.previousImage} />
					<input type="button" value=">" onClick={this.nextImage} />
				</div>
			</div>
		)
	}
}
