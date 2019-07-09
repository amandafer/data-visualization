import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { Table } from '../Table';
import { Search } from '../Search';
import { setFilteredData } from '../../actions';
import { withLoading } from '../../utils/hoc/withLoading';

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

const List = ({ users, setFilteredData }) => (
	<>
		<Search placeholder='Search a User' onSearchHandler={setFilteredData} />
		<Table rows={users} headRows={headRows} />
	</>
);

const mapStateToProps = state => {
	const { users, loading } = state.usersReducer;

	return {
		users,
		loading
	};
};
const mapDispatchToProps = dispatch => ({
	setFilteredData: search => dispatch(setFilteredData(search))
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withLoading()
)(List);
