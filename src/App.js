import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getUsersData } from './actions';
import { Header } from './components/Header';
import { List } from './components/List';
import { Graphic } from './components/Charts';

const App = ({ getUsersData }) => {
	useEffect(() => {
		getUsersData();
	}, []);

	return (
		<>
			<Router>
				<Header />
				<Route exact path='/' component={List} />
				<Route exact path='/chart' component={Graphic} />
			</Router>
		</>
	);
};

const mapDispatchToProps = dispatch => ({
	getUsersData: () => dispatch(getUsersData())
});

export default connect(
	() => ({}),
	mapDispatchToProps
)(App);
