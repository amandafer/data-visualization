import React from 'react';
import { withRouter } from 'react-router-dom';

import { Tabs, Tab } from '@material-ui/core';

const Header = ({ history }) => {
	const {
		location: { pathname }
	} = history;
	const [value, setValue] = React.useState(pathname);

	const onChangeHandle = (event, newValue) => {
		history.push(newValue);
		setValue(newValue);
	};

	return (
		<>
			<h2>Data Visualization</h2>
			<Tabs
				value={value}
				onChange={onChangeHandle}
				indicatorColor='primary'
				textColor='primary'
				centered
			>
				<Tab label='Data grid' value='/' />
				<Tab label='Charts' value='/charts' />
			</Tabs>
		</>
	);
};

export default withRouter(Header);
