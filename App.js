import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/login/login.component';
import Home from './src/containers/home/home.component';


const Router = StackNavigator({
	Login: { screen: Login },
	Home: { screen: Home }
});

export default class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Router />
		);
	}
}