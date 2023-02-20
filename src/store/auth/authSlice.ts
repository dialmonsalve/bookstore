import { createSlice } from '@reduxjs/toolkit';
import { Auth } from '../../users/interfaces';

const initialState:Auth = {

	uid: null,
	displayName: null,
	username: null,
	password: null,
	status: 'no-authorized',
	isAdmin: false,
	rol: null,
	message: null,
	createAt:null,
}

export const authSlice = createSlice({
		name: 'auth',
		initialState,
		reducers: {
			login: (state, action ) => {

			},
			logout: ( state, payload)=>{

			},
			checkingCredentials: ( state )=>{
				state.status = 'checking';
				
			},
		}
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } =  authSlice.actions;