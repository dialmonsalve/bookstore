import { checkingCredentials, login, logout } from './authSlice';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../store';
import { FormLogin } from '../../users/interfaces';




export const startLogin = ({username, password}: FormLogin):ThunkAction<void, RootState, unknown, AnyAction> => {

	return async (dispatch) => {

		dispatch(checkingCredentials());

		const result = await  fetch(`${import.meta.env.VITE_API_URL}`);
		const resp = await result.json()

	}

}

