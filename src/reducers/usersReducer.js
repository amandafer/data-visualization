import produce from 'immer';

import {
	GET_USERS_DATA,
	GET_USERS_DATA_LOADING,
	GET_USERS_DATA_FAILURE,
	SET_FILTERED_DATA,
	RESET_DATA
} from '../actions/types';

const initialState = {
	dataSet: [],
	users: [],
	loading: false,
	error: false
};

const isStrIncluded = (exp, word) =>
	exp && exp.toLowerCase().includes(word.toLowerCase());

export default produce((draft = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_USERS_DATA:
			draft.dataSet = payload.usersData;
			draft.users = payload.usersData;
			draft.loading = false;
			break;

		case GET_USERS_DATA_LOADING:
			draft.loading = true;
			break;

		case GET_USERS_DATA_FAILURE:
			draft.error = true;
			draft.loading = false;
			break;

		case SET_FILTERED_DATA:
			const { search } = payload;
			const data = draft.dataSet.filter(({ first_name, last_name }) => {
				return (
					isStrIncluded(first_name, search) ||
					isStrIncluded(last_name, search)
				);
			});
			draft.users = data;
			break;

		case RESET_DATA:
			draft.users = draft.dataSet;
			break;

		default:
			return draft;
	}
});
