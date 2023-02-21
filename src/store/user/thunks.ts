import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { Auth, User } from "../../users/interfaces";
import { RootState } from "../store";
import { savingNewUser, setSaving, setUser, setUsers, updateUser } from "./userSlice";

export const startLoadingUsers = (): ThunkAction<void, RootState, unknown, AnyAction> => {

	return async (dispatch) => {

		try {

			const resp = await fetch(`${import.meta.env.VITE_API_URL}`);
			const users:User[] = await resp.json()

			const noAdmin = users.filter(user => user.id !== "1")

			dispatch(setUsers(noAdmin))

		} catch (error) {
			console.log(error);
		}
	}
}

export const startAddNewUser = (user: User): ThunkAction<void, RootState, unknown, AnyAction> => {

	return async dispatch => {
		dispatch(savingNewUser)

		try {
			const resp = await fetch(import.meta.env.VITE_API_URL, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'content-type': 'application/json'
				}
			});
			await resp.json()

		} catch (error) {
			console.log(error)
		}
	}
}

export const getUserById = ( id:string ): ThunkAction<void, RootState, unknown, AnyAction> => {

	return async dispatch =>{

		const resp = await  fetch(`${import.meta.env.VITE_API_URL}`);
		const users:Auth[] = await resp.json()
	
		const findUser = users.find(user => user.id === id)

		if(typeof findUser === 'undefined') return
		
		if(findUser === null) {
			const errorMessage = 'User dont exist, please try again'
			return {
				ok:false,
				errorMessage
			}
		}
		if(findUser.id ===  "1") {
			const errorMessage = 'You dontt have permissions to update this user'
			return {
				ok:false,
				errorMessage
			}
		}
		dispatch(setUser(findUser))  
	}
}

export const startUpdateUser = (id:string, user:User): ThunkAction<void, RootState, unknown, AnyAction> =>{
	
	return async dispatch => {

		dispatch(setSaving)

		try {

			const resp = await  fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
				method: 'PUT', 
				body: JSON.stringify(user),
				headers: {
					'content-type': 'application/json'
				}
			});
			await resp.json()

			dispatch(updateUser)

		} catch (error) {
			console.log(error);
		}
	}
}

export const startDelitingUser =(id:string): ThunkAction<void, RootState, unknown, AnyAction> =>{
	
	return async dispatch => {

		try {

			const resp = await  fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
				method: 'DELETE'
			});
			await resp.json()

		} catch (error) {
			console.log(error);
		}
	}
}