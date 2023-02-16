import { Routes } from "../interfaces/routeAdmin"
import { UserPage } from "../pages/UserPage"
import { Panel } from "../views/panel-control/Panel"

const isAdmin = true

export const routeAdmin:Routes[] = [
	{
		path: '/bookstore-app/control-panel',
		element: isAdmin ? <Panel/> : <h1>No  es admin</h1>,
		children:[
			{
				path:'/bookstore-app/control-panel/users',
				element:<UserPage/>,
				children:[
					{
						path:'/bookstore-app/control-panel/users/add',
						element:<h1>Add</h1>
					},
					{
						path:'/bookstore-app/control-panel/users/update',
						element:<h1>Update</h1>
					}
				]
			},	
		]
	}
]