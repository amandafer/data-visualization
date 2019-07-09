import React, { useState } from 'react';
import { IconButton, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
	search: {
		position: 'absolute',
		right: 0,
		padding: `${theme.spacing(2)}px 0`
	}
}));

const Search = ({ placeholder, onSearchHandler, onChange }) => {
	const [searchWord, setSearchWord] = useState('');
	const onClickHandler = () => onSearchHandler(searchWord);
	const { search } = useStyles();

	const keyPressHandler = ({ keyCode, target }) => {
		setSearchWord(() => target.value);

		if (keyCode === 13) {
			onClickHandler();
		}
	};

	return (
		<div className={search}>
			<Input
				placeholder={placeholder}
				onChange={onChange}
				onKeyDown={keyPressHandler}
			/>
			<IconButton aria-label='Search' onClick={onClickHandler}>
				<SearchIcon />
			</IconButton>
		</div>
	);
};

export default Search;
