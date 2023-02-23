import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { getUserByUsernameAndPassword } from '../../data/provider';
import { RootState } from '../store';
import { checkingCredentials, login, logout } from './authSlice';
import { FormLogin } from '../../users/interfaces';

export const startLogin = ({ username, password }: FormLogin): ThunkAction<void, RootState, unknown, AnyAction> => {

	return async (dispatch) => {

		dispatch(checkingCredentials());

		const result = await getUserByUsernameAndPassword({ username, password });

		if (typeof result.errorMessage !== 'undefined') {
			return dispatch(logout(result.errorMessage));
		}
		dispatch(login(result));
	};
};

