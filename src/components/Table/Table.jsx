import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import FilterListIcon from '@material-ui/icons/FilterList';

import EnhancedTableHead from './TableHead';
import EnhancedTableBody from './TableBody';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(8)
	},
	table: {
		minWidth: 750
	},
	tableWrapper: {
		overflowX: 'auto'
	}
}));

const EnhancedTable = ({ rows, headRows }) => {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('id');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage] = React.useState(25);

	const handleRequestSort = (event, property) => {
		const isDesc = orderBy === property && order === 'desc';
		setOrder(isDesc ? 'asc' : 'desc');
		setOrderBy(property);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	return (
		<div className={classes.root}>
			<div className={classes.tableWrapper}>
				<Table className={classes.table} aria-labelledby='tableTitle'>
					<EnhancedTableHead
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
						rowCount={rows.length}
						headRows={headRows}
					/>
					<EnhancedTableBody
						headRows={headRows}
						rows={rows}
						order={order}
						orderBy={orderBy}
						page={page}
						rowsPerPage={rowsPerPage}
					/>
				</Table>
			</div>
			<TablePagination
				rowsPerPageOptions={[]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page'
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page'
				}}
				onChangePage={handleChangePage}
			/>
		</div>
	);
};

export default EnhancedTable;
