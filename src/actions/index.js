import {
	GET_USERS_DATA,
	GET_USERS_DATA_LOADING,
	GET_USERS_DATA_FAILURE,
	SET_FILTERED_DATA,
	RESET_DATA
} from './types';
import { userApi } from '../api/constants';

export const getUsersData = () => {
	return dispatch => {
		dispatch(loadingData());

		return fetch(`${userApi}/data`)
			.then(async data => {
				const response = await data.json();
				dispatch(setUsersData(response));
				return response;
			})
			.catch(err => {
				dispatch(errorFetchingData(err));
			});
	};
};

export const setFilteredData = search => ({
	type: SET_FILTERED_DATA,
	payload: { search }
});

export const resetData = () => ({
	type: RESET_DATA
});

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
