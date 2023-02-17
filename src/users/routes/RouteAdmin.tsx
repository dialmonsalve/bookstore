import { NotPermission } from "../../not-found"
import { Routes } from "../interfaces/routeAdmin"
import { UserPage, EditUser, NewUserPage } from "../views/users"

const isAdmin = true

export const routeAdmin: Routes[] =  [
	// {
		index:true,
		element: isAdmin ? <UserPage /> : <NotPermission />,
	},
	{
		path: '/bookstore-app/control-panel/users/add',
		element: <NewUserPage />,
	},	
	{
		path: '/bookstore-app/control-panel/users/edit',
		element: <EditUser />,
	},
	{
		path: '/bookstore-app/control-panel/users/delete'
	}
]