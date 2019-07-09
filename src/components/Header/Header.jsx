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
		<Tabs
			value={value}
			onChange={onChangeHandle}
			indicatorColor='primary'
			textColor='primary'
			centered
		>
			<Tab label='Data grid' value='/' />
			<Tab label='Charts' value='/chart' />
		</Tabs>
	);
};

export default withRouter(Header);
