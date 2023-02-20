import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../users/interfaces';
import { initialState } from './initialState';


export const userSlice = createSlice({
		name: 'user',
		initialState,
		reducers: {

			login: (state:User, {payload}: PayloadAction<User> ) => {

			},
			logout: ( state:User, {payload}:PayloadAction<string>)=>{

			},
			checkingCredentials: ( state:User )=>{

			}
		}
});
// Action creators are generated for each case reducer function
export const { login, logout,  checkingCredentials } =  userSlice.actions;