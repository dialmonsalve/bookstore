import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import { User } from "../../users/interfaces";
import { RootState } from "../store";
import { savingNewUser, setActiveUser, setSaving, setUsers } from "./adminSlice";

export const startLoadingUsers = ():ThunkAction<void, RootState, unknown, AnyAction> => {

	return async (dispatch) =>{		

		try {

			const resp = await  fetch(`${import.meta.env.VITE_API_URL}`);
			const users = await resp.json()
			dispatch(setUsers(users))
			
		} catch (error) {
			console.log(error);			
		}
	}
}

export const startAddNewUser = (user:User):ThunkAction<void, RootState, unknown, AnyAction> => {

	return async dispatch =>{
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

export const getUserById = (id:string):ThunkAction<void, RootState, unknown, AnyAction> => {

	return async dispatch => {

		dispatch(setSaving())

		try {		

			const resp = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

			const user:User = await resp.json()

			dispatch(setActiveUser(user))

		} catch (error) {
			console.log(error);
			
		}
	}
}