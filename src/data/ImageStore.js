import RymdklubbenDispatcher from './RymdklubbenDispatcher'
import { EventEmitter } from 'events'
import merge from 'merge'
const image1 = require('../kikki_face.svg')
const image2 = require('../kikki_face_no_eyes.svg')



const imgURLs = [image1, image2]
let index = 0

function switchImageURL(){
	index = (index + 1) % imgURLs.length
}

export const ImageStore = merge(EventEmitter.prototype, {
	getState: () => {
		return { imageURL: imgURLs[index] }
	},

	emitChange: function() {
		this.emit('change')
	}
})

RymdklubbenDispatcher.register((payload) => {
	switch(payload.actionName){
		case 'UPDATE_IMAGE':
			switchImageURL()
			ImageStore.emitChange()
			break
		default:
			console.log('Action detected but unrecognized')
			break
	}
})
