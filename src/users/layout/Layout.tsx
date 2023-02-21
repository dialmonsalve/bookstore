import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '.';
import { useAppSelector } from '../hooks/app';
import { LoginPage } from '../pages/LoginPage';

export const Layout = () => {


	const status = 'authorized'

	return (

		<>

			{
				status==='no-authorized'
					?<LoginPage/>
					:(
						<>
							<Header />

							<Sidebar />

							<Outlet />
						</>
					)
			}

		</>

	)
}
