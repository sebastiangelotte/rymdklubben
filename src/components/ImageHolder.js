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

	updateImage () {
		RymdklubbenDispatcher.dispatch({
			actionName: 'UPDATE_IMAGE',
			data: ''
		})
	}

	render () {
		return (
			<div>
				<img src={this.state.imageURL} onClick={this.updateImage} style={{height: "400px"}} alt=''/>
				<div>
					<input type="button" value="Toggle!" onClick={this.updateImage} />
				</div>
			</div>
		)
	}
}
