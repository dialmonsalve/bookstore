import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Admin, User } from "../../users/interfaces";

const initialState:Admin = {
	isSaving: false,
	messagesSaved: '',
	users: [],
	active: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {

		savingNewUser: (state: Admin) => {
			state.isSaving = true
		},

		addNewUser: (state: Admin, { payload }: PayloadAction<User>) => {
			state.users.push(payload);
			state.isSaving = false;
		},

		setUsers: (state: Admin, { payload }: PayloadAction<User[]>) => {
			state.users = payload;
		},

		setUser: (state: Admin, { payload }: PayloadAction<User>) => {
			state.active = payload	
		},

		setClearUser :(state:Admin) =>{
			state.active = initialState.active

		},

		setSaving: (state:Admin) => {

		},

		updateUser: (state: Admin, { payload }: PayloadAction<User>) => {
			state.isSaving = false;
			state.users = state.users.map(user => {
				if (user.id === payload.id) {
					return payload;
				}
				return user;
			});
		},

		deleteUserById: (state: Admin, { payload }: PayloadAction<string>) => {
			state.active = null;
			state.users = state.users.filter(user => user.id !== payload)
		},

	}
});
// Action creators are generated for each case reducer function
export const {
	addNewUser,
	deleteUserById,
	setSaving,
	savingNewUser,
	setUser,
	setUsers,
	setClearUser,
	updateUser,
} = userSlice.actions;