// TODO: Add action creator and move all async calls to it.
// Stores shouldn't make async calls.

import HueDispatcher from '../dispatchers/HueDispatcher'
import { EventEmitter } from 'events'
import merge from 'merge'
import hue, { HueApi } from 'node-hue-api'

const host = {
	id: "kCr68VVU4CSghWvs2uk4yb9l9y7dgf0ovlv8KnBn",
	ipAddress: "192.168.0.4",
	userDescription: "hue-monster"
}

const hueApi = new HueApi(host.ipAddress, host.id)
let lightState = hue.lightState

export const HueStore = merge(EventEmitter.prototype, {
	getState: () => {
		return
	},

	emitChange: () => {
		HueStore.emit('change')
	}
})

let lightActions = {
	off: (lightId) => {
		let state = lightState.create().on().white(500, 0)
		hueApi.setLightState(lightId, state).done()
	},

	on: (lightId) => {
		let state = lightState.create().on().white(500, 100)
		hueApi.setLightState(lightId, state).done()
	}
}


HueDispatcher.register((payload) => {
	switch (payload.actionName) {
		case 'LIGHT_OFF':
			console.log("lights turn off!")
			lightActions.off(payload.data)
			HueStore.emitChange()
			break
		case 'LIGHT_ON':
			console.log("lights on!")
			lightActions.on(payload.data)
			HueStore.emitChange()
			break
		default:
			console.log("Action not recognized")
			break
	}
})
