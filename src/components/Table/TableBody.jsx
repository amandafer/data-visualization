import React from 'react';

import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getSorting(order, orderBy) {
	return order === 'desc'
		? (a, b) => desc(a, b, orderBy)
		: (a, b) => -desc(a, b, orderBy);
}

const EnhancedTableBody = ({ rows, order, orderBy, page, rowsPerPage }) => {
	return (
		<TableBody>
			{stableSort(rows, getSorting(order, orderBy))
				.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				.map((row, index) => {
					return (
						<TableRow hover key={`${row[0]}-${index}`}>
							{Object.values(row).map((category, pos) => (
								<TableCell
									align='right'
									key={`${row[0]}-${pos}`}
								>
									{category}
								</TableCell>
							))}
						</TableRow>
					);
				})}
		</TableBody>
	);
};

export default EnhancedTableBody;
