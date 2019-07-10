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

const getAverageIncome = data => {
	const arr = Object.values(data);
	const sum = arr.reduce((a, b) => a + b, 0);
	return (sum / arr.length).toFixed(2);
};

const setExpSalaryData = users => {
	let data = {};
	users.forEach(user => {
		const years = parseInt(user.years_of_experience);
		data[years]
			? data[years].push(user.salary)
			: (data[years] = [user.salary]);
	});

	return [
		['Experience', 'Income'],
		...Object.keys(data).map(key => {
			console.log(key);
			return [parseFloat(key), parseFloat(getAverageIncome(data[key]))];
		})
	];
};

const chartTypes = [
	{
		value: 'PieChart',
		title: 'Pie Chart'
	},
	{
		value: 'BarChart',
		title: 'Bar Chart'
	},
	{
		value: 'LineChart',
		title: 'Line Chart'
	},
	{
		value: 'ScatterChart',
		title: 'Scatter Chart'
	}
];

const Graphic = ({ users }) => {
	const [type, setType] = React.useState('PieChart');
	const ages = users.map(user => calculateAge(user.date_of_birth));
	const ageData = setAgeData(ages);
	const expSalaryData = setExpSalaryData(users);

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
					{chartTypes.map(({ value, title }) => (
						<MenuItem value={value}>{title}</MenuItem>
					))}
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
