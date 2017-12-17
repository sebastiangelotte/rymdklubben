import RymdklubbenDispatcher from './RymdklubbenDispatcher'
import { EventEmitter } from 'events'
import merge from 'merge'

const imgURLs = ['https://i.imgur.com/YMtKG77.png', 'https://i.imgur.com/lJlaGS8.jpg']
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
