import { User } from "../../users/interfaces";

export const initialState: User = {
	id: null,
	displayName: '',
	lastName: '',
	dependency: '',
	email: '',
	username: '',
	password: '',
	status: 'no-authorized',
	isAdmin: false,
	rol: '',
	isNew: true,
	errorMessage: '',
	photoUrl: null,
	createAt:'',
	updateAt:null,
}