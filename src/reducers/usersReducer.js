import produce from 'immer';

import {
	GET_USERS_DATA,
	GET_USERS_DATA_LOADING,
	GET_USERS_DATA_FAILURE
} from '../actions/types';

const initialState = {
	users: [],
	loading: false,
	error: false
};

export default produce((draft = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_USERS_DATA:
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

		default:
			return draft;
	}
});
