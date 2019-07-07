import {
	GET_USERS_DATA,
	GET_USERS_DATA_LOADING,
	GET_USERS_DATA_FAILURE
} from './types';
const { userApi } = './constants';

export const getUsersData = () => {
	return dispatch => {
		dispatch(loadingData);

		return fetch(`${userApi}/data`)
			.then(data => dispatch(setUsersData(data)))
			.catch(errorFetchingData);
	};
};

const loadingData = () => ({
	type: GET_USERS_DATA_LOADING
});
const errorFetchingData = error => ({
	type: GET_USERS_DATA_FAILURE,
	payload: { error }
});

const setUsersData = usersData => ({
	type: GET_USERS_DATA,
	payload: { usersData }
});
