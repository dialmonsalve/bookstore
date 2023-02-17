import { createBrowserRouter } from 'react-router-dom'

import { Layout } from '../users/layout/Layout'
import { LoginPage } from '../users/pages/LoginPage'
import { ControlPanel, Menu } from '../users/views/configurations'
import { routeAdmin } from '../users/routes/RouteAdmin'
import { NotFound } from '../not-found/NotFound'

const isActive = 'checked'

export const router = createBrowserRouter([

	//!PUBLIC ROUTS
	{
    path: "/",
		errorElement:<NotFound/>

  },

	//!PRIVATE ROUTS
	{
		path: '/bookstore-app',
		element: isActive === 'checked' ? <Layout /> : <LoginPage />,
		children: [
			{
				index: true,
				element: <Menu />,
			},

			{
				path: '/bookstore-app/control-panel',
				children: [

					//!USERS ROUTS
					{
						index: true,
						element: <ControlPanel />
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

