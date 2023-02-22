import { createBrowserRouter } from 'react-router-dom';

import { AppBookstore, } from '../users/pages';
import { routeAdmin } from '../users/routes/RouteAdmin';
import { NotFound } from '../not-found/NotFound';
import { ControlPanelPage, HomePanelPage } from '../users/views/users';

export const router = createBrowserRouter([

	//!PUBLIC ROUTS
	{
		path: "/",
		errorElement: <NotFound />
	},

	//!PRIVATE ROUTS
	{
		path: '/bookstore-app',
		element: <AppBookstore  />,
		children: [
			{
				index: true,
				element: <HomePanelPage/>,
			},

			{
				path: '/bookstore-app/control-panel',
				children: [

					//!USERS ROUTS
					{
						index: true,
						element: <ControlPanelPage />
					},

					//!ADMIN ROUTS
					{
						path: '/bookstore-app/control-panel/users',
						children: routeAdmin,
					}
				]
			}
		]
	}
])

