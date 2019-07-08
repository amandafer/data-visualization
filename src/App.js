import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { List } from './components/List';

class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Header />
					<Route exact path='/' component={List} />
					<Route exact path='/chart' component={List} />
				</Router>
			</>
		);
	}
}

export default App;
