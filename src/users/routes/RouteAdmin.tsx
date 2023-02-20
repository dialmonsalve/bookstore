import { NotPermission } from "../../not-found"
import { Routes } from "../interfaces/routeAdmin"
import { UsersView, EditUserView, CreateUserView } from "../views/users"

const isAdmin = true

export const routeAdmin: Routes[] =  [
	{
		index:true,
		element: isAdmin ? <UsersView /> : <NotPermission />,
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