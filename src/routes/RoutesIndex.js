import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Launches from './Launches'
import ImageHolder from './ImageHolder';

export default () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/Media" exact component={ImageHolder} />
			<Route path="/Launches" exact component={Launches} />
		</Switch>
	</BrowserRouter>
)
