
/*User interface  */

type Roles = |'admin' |'shop' |'sales' |'user' |'' ; 
type Status = | 'no-authorized' | 'checking'  | 'authorized';
type Dependencies = | 'administration' | 'shop' | 'sales' |'Humanity' | '';

/* Admin interface */
export interface User extends Person {
	status?: Status;
}

export interface Auth extends Person {
	ok:boolean
}

/* Form login Interface */
export interface FormLogin {
	username:string;
	password:string;
}

export interface Person {
	createAt:string;
	dependency: Dependencies;
	displayName: string;
	email:string;
	errorMessage?:string ;
	id: string | null;
	isAdmin: boolean;
	isNew:boolean;
	lastName:string;
	password: string | null;
	photoUrl: string | null
	rol: Roles;
	updateAt:string | null;
	username: string ;
}
