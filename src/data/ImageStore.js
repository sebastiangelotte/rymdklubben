import RymdklubbenDispatcher from './RymdklubbenDispatcher'
import { EventEmitter } from 'events'
import merge from 'merge'
const image1 = require('../rymdklubben_neon.svg')
const image2 = require('../rymdklubben_isometric.svg')
const image3 = require('../kikki_face.svg')

var index = 0



const imgURLs = [image1, image2, image3]

function nextImageURL(){
	index = (index + 1) % imgURLs.length
}

function previousImageURL(){
	// TODO: improve me
	if (index === 0) {
		index = imgURLs.length -1
	} else {
		index--
	}

}

function selectImageURL(newIndex){
	index = newIndex
}

export const ImageStore = merge(EventEmitter.prototype, {
	getState: () => {
		return { imageURLs: imgURLs, activeImageURL: imgURLs[index] }
	},

	emitChange: function() {
		this.emit('change')
	}
})

RymdklubbenDispatcher.register((payload) => {
	switch(payload.actionName){
		case 'NEXT_IMAGE':
			nextImageURL()
			ImageStore.emitChange()
			break
		case 'PREVIOUS_IMAGE':
			previousImageURL()
			ImageStore.emitChange()
			break
		case 'SELECT_IMAGE':
			selectImageURL(payload.data)
			ImageStore.emitChange()
			break
		default:
			console.log('Action detected but unrecognized')
			break
	}
})
