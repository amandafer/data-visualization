import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() => ({
	loader: {
		position: 'absolute',
		left: '50%',
		top: '50%'
	}
}));

export const withLoading = () => Component => props => {
	const { loader } = useStyles();

	if (props.loading) {
		return <CircularProgress className={loader} />;
	}
	return <Component {...props} />;
};
