import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../users/interfaces";

export interface Admin {
	isSaving: boolean,
	messagesSaved: '',
	active: User | null
	users: User[]
}

const initialState: Admin = {
	isSaving: false,
	messagesSaved: '',
	users: [],
	active: null,
}

export const userSlice = createSlice({
	name: 'admin',
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

		setSaving: (state: Admin) => {

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
	updateUser,
} = userSlice.actions;