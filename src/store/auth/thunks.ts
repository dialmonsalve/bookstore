import { checkingCredentials, login, logout } from './authSlice';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import {  FormLogin } from '../../users/interfaces';
import { getUserByUsernameAndPassword } from '../../data/provider';


export const startLogin = ({username, password}: FormLogin):ThunkAction<void, RootState, unknown, AnyAction> => {

	return async (dispatch) => {

		dispatch(checkingCredentials());

		const result = await getUserByUsernameAndPassword({username, password})

		if(typeof result.errorMessage !== 'undefined') {
			return dispatch(logout(result.errorMessage))
		}
		dispatch(login(result))

	}

}

