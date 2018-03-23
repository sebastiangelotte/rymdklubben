import React, { Component } from 'react';
import hue, { HueApi } from 'node-hue-api'
import Light from './components/Light'

const host = {
	id: "kCr68VVU4CSghWvs2uk4yb9l9y7dgf0ovlv8KnBn",
	ipAddress: "192.168.0.4",
	userDescription: "hue-monster"
}

const hueApi = new HueApi(host.ipAddress, host.id)

class App extends Component {
	constructor () {
		super ()
		this.displayResult = this.displayResult.bind(this)
	}
	render() {
		return (
			<div>
				<input type="button" value="Get bridges" onClick={this.loadBridge} />
				<input type="button" value="Register user" onClick={this.registerUser} />
				<input type="button" value="Get config" onClick={this.loadConfig} />
				<input type="button" value="Get lights" onClick={this.getLights} />
				<Light lightId='1' lightName="Vardagsrum"></Light>
				<Light lightId='2' lightName="Sovrum"></Light>
				<Light lightId='3' lightName="Golvlampa"></Light>
			</div>
		)
	}

	loadBridge = () => {
		hue.nupnpSearch().then(this.displayResult).done()
	}

	registerUser = () => {
		hueApi.registerUser(host.ipAddress, host.userDescription).then(this.displayResult).done()
	}

	loadConfig = () => {
		hueApi.getConfig().then(this.displayResult).done()
	}
	getLights = () => {
		hueApi.lights().then(this.displayResult).done()
	}

	displayResult = (data) => {
		console.log("Result: " + JSON.stringify(data))
	}
}

export default App;
