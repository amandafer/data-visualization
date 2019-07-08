import React, { useState, Component } from 'react';
import { connect } from 'react-redux';

import { Table } from '../Table';
import { Search } from '../Search';
import { getUsersData, setFilteredData } from '../../actions';

const headRows = [
	{ id: 'id', numeric: true, label: 'ID' },
	{ id: 'first_name', numeric: false, label: 'First Name' },
	{ id: 'last_name', numeric: false, label: 'Last Name' },
	{ id: 'email', numeric: false, label: 'Email' },
	{ id: 'date_of_birth', numeric: true, label: 'Date of Birth' },
	{ id: 'salary', numeric: true, label: 'Salary' },
	{ id: 'years_of_experience', numeric: true, label: 'Years of Experience' },
	{ id: 'industry', numeric: true, label: 'Industry' }
];

class List extends Component {
	componentDidMount() {
		const { getUsersData } = this.props;
		getUsersData();
	}

	render() {
		const { users, setFilteredData } = this.props;

		return (
			<>
				<Search
					placeholder='Search a User'
					onSearchHandler={setFilteredData}
				/>
				<Table rows={users} headRows={headRows} />
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
	getUsersData: () => dispatch(getUsersData()),
	setFilteredData: search => dispatch(setFilteredData(search))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(List);
