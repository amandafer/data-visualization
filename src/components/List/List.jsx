import React, { useState, Component } from 'react';
import { connect } from 'react-redux';

import Table from '../Table';

import { getUsersData } from '../../actions';

class List extends Component {
	componentDidMount() {
		const { getUsersData } = this.props;
		getUsersData();
	}

	render() {
		const { users } = this.props;
		debugger;

		return (
			<>
				{/* {!!users.length &&
					users.map((user, index) => (
						<div key={`${user.id}-${index}`}>{user.first_name}</div>
					))} */}
				<Table />
			</>
		);
	}
}

const mapStateToProps = state => {
	const { users } = state.usersReducer;
	return {
		users
	};
};
const mapDispatchToProps = dispatch => ({
	getUsersData: () => dispatch(getUsersData())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
