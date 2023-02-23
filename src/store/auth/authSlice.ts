import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../users/interfaces';

const initialState: User = {
	createAt: '',
	dependency: '',
	displayName: '',
	email: '',
	errorMessage: undefined,
	id: null,
	isAdmin: false,
	isNew: false,
	lastName: '',
	password: '',
	photoUrl: null,
	rol: '',
	status: 'no-authorized',
	updateAt: null,
	username: '',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state: User, { payload }: PayloadAction<User>) => {
			state.status = 'authorized';
			state.errorMessage = undefined,
			state.createAt = payload.createAt;
			state.dependency = payload.dependency;
			state.displayName = payload.displayName;
			state.email = payload.email;
			state.id = payload.id;
			state.isAdmin = payload.isAdmin;
			state.isNew = payload.isNew;
			state.lastName = payload.lastName;
			state.password = payload.password;
			state.photoUrl = payload.photoUrl;
			state.rol = payload.rol;
			state.updateAt = payload.updateAt;
			state.username = payload.username;
		},
		logout: ( state: User, { payload }: PayloadAction<string | undefined> ) => {
			state.status = 'no-authorized';
			state.errorMessage = payload;
			state.id = null;
			state.createAt = '';
			state.dependency = '';
			state.displayName = '';
			state.email = '';
			state.isAdmin = false;
			state.isNew = false;
			state.lastName = '';
			state.password = null;
			state.photoUrl = null;
			state.rol = '';
			state.updateAt = null;
			state.username = '';
		},
		checkingCredentials: (state: User) => {
			state.status = 'checking';
		},
	}
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;