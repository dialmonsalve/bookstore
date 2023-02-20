
/*User interface  */
export interface User {
	createAt:string | null;
	dependency: Dependencies;
	displayName: string ;
	email:string;
	errorMessage:string | null;
	isAdmin:boolean,
	isNew:boolean;
	lastName:string;
	ok:boolean;
	password:string;
	photoUrl:string | null;
	rol:Roles;
	status: Status;
	id:string | null;
	updateAt:string | null;
	username:string;
}

type Roles = |'admin' |'shop' |'sales' |'user' |'' ; 
type Status = | 'no-authenticated' | 'checking'  | 'authenticated';
type Dependencies = | 'administration' | 'shop' | 'sales' |'Humanity' | '';

/* Admin interface */
export interface Auth {
	createAt:null;
	displayName: string | null;
	message: string |null;
	isAdmin: boolean;
	password: string | null;
	rol: string | null;
	status: Status;
	uid: string | null;
	username: string | null;
}

/* Form login Interface */
export interface FormLogin {
	username:string;
	password:string;
}
