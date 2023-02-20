import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../users/interfaces';

export interface Admin {
	isSaving:boolean,
	messagesSaved: '',
	active:User | null
	users:User[]
}

const initialState:Admin = {
	isSaving:false,
	messagesSaved: '',
	active:null,
	users:[],
}

export const adminSlice = createSlice({
		name: 'admin',
		initialState,
		reducers: {

			savingNewUser: (state:Admin)=>{
				state.isSaving = true
			},

			addNewUser: (state:Admin, action:PayloadAction<User>)=> {
				state.users.push(action.payload);
				state.isSaving = false;
			},

			setActiveUser: (state:Admin , action:PayloadAction<User | null>) => {
				state.active = action.payload
			},

			setUsers: (state:Admin, action)=>{
				state.users = action.payload;
			},

			setSaving: (state:Admin) => {

			},

			updateUser: (state:Admin , action)=> {

			},

			deleteUserById: () => {

			},

		}
});
// Action creators are generated for each case reducer function
export const { 
	addNewUser,
	deleteUserById,
	setActiveUser,
	setSaving, 
	savingNewUser,
	setUsers,
	updateUser, 
} =  adminSlice.actions;