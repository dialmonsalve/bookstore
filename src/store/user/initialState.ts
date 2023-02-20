import { User } from "../../users/interfaces";

export const initialState: User = {
	ok:false,
	id: null,
	displayName: '',
	lastName: '',
	dependency: '',
	email: '',
	username: '',
	password: '',
	status: 'checking',
	isAdmin: false,
	rol: '',
	isNew: true,
	errorMessage: null,
	photoUrl: null,
	createAt:null,
	updateAt:null,
}