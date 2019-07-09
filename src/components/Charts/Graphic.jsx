import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import {
	FormControl,
	InputLabel,
	Select,
	OutlinedInput,
	MenuItem
} from '@material-ui/core';

import { withLoading } from '../../utils/hoc/withLoading';
import { calculateAge } from '../../utils/helpers';
import EnhancedChart from './Chart';

const setAgeData = ages => [
	['age', 'n˚ of employees'],
	['Not applicable', ages.filter(age => isNaN(age)).length],
	['18-30', ages.filter(age => age >= 18 && age <= 30).length],
	['31-45', ages.filter(age => age >= 31 && age <= 45).length],
	['45+', ages.filter(age => age > 45).length]
];

const setExpSalaryData = users => [
	['Income', 'Experience'],
	...users.map(user => [user.salary, user.years_of_experience])
];

const Graphic = ({ users }) => {
	const [type, setType] = React.useState('PieChart');
	const ages = users.map(user => calculateAge(user.date_of_birth));
	const ageData = setAgeData(ages);
	const expSalaryData = setExpSalaryData(users);
	// debugger; 0-2 2-4 4-6 6-8

	const handleChange = event => {
		setType(() => event.target.value);
	};

	return (
		<>
			<FormControl variant='outlined'>
				<InputLabel htmlFor='outlined-age-simple'>Type</InputLabel>
				<Select
					value={type}
					onChange={handleChange}
					input={<OutlinedInput labelWidth={50} />}
				>
					<MenuItem value={'PieChart'}>Pie Chart</MenuItem>
					<MenuItem value={'BarChart'}>Bar Chart</MenuItem>
					<MenuItem value={'LineChart'}>Line Chart</MenuItem>
					<MenuItem value={'ScatterChart'}>Scatter Chart</MenuItem>
				</Select>
			</FormControl>

			<EnhancedChart
				type={type}
				data={ageData}
				title='Age of the users'
			/>
			<EnhancedChart
				type='LineChart'
				data={expSalaryData}
				title='Experience x salary'
			/>
		</>
	);
};

const mapStateToProps = state => {
	const { users, loading } = state.usersReducer;
	return {
		users,
		loading
	};
};

export default compose(
	connect(mapStateToProps),
	withLoading()
)(Graphic);
