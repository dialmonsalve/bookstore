
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { BookstoreApp } from '../BookstoreApp'
import { LoginPage } from '../users/pages/LoginPage'
import { routeAdmin } from '../users/routes/RouteAdmin'

const isActive = 'checked'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Index</h1>
	},
	{
		path: '/bookstore-app',
		element: isActive === 'no-checked' ? <LoginPage/> : <BookstoreApp/>,		
		children: routeAdmin,
	},
	{
		path: '/*',
		element: <Navigate to='/' />
	},
	{
		path: '/bookstore-app/*',
		element: <Navigate to='/bookstore-app' />,
	},
	{
		path: '/bookstore-app/control-panel/*',
		element: <Navigate to='/bookstore-app/control-panel/' />
	},

])

