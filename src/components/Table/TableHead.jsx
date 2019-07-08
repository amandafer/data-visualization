import React from 'react';
import PropTypes from 'prop-types';

import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headRows.map(row => (
					<TableCell
						key={row.id}
						align={row.numeric ? 'right' : 'left'}
						sortDirection={orderBy === row.id ? order : false}
					>
						<TableSortLabel
							active={orderBy === row.id}
							direction={order}
							onClick={createSortHandler(row.id)}
						>
							{row.label}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.string.isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired
};

export default EnhancedTableHead;
