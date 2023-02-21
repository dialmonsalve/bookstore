import { Routes } from "../interfaces/routeAdmin"
import {  EditUserView, CreateUserView } from "../views/users"
import { IsAdmin } from "./IsAdmin"

export const routeAdmin: Routes[] =  [
	{
		index:true,
		element: <IsAdmin />,
	},
	{
		path: '/bookstore-app/control-panel/users/add',
		element: <CreateUserView />,
	},	
	{
		path: '/bookstore-app/control-panel/users/:userId/edit',
		element: <EditUserView />,
	},
	{
		path: '/bookstore-app/control-panel/users/delete'
	}
]