import React from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

let searchWord;

const Search = ({ placeholder, onSearchHandler, onChange }) => {
	const onClickHandler = () => onSearchHandler(searchWord);
	const keyPressHandler = ({ keyCode, target }) => {
		searchWord = target.value;

		if (keyCode === 13) {
			onClickHandler();
		}
	};

	return (
		<>
			<InputBase
				placeholder={placeholder}
				onChange={onChange}
				onKeyDown={keyPressHandler}
			/>
			<IconButton aria-label='Search' onClick={onClickHandler}>
				<SearchIcon />
			</IconButton>
		</>
	);
};

export default Search;
