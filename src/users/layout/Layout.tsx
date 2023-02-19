import { Outlet } from 'react-router-dom';
import { Header, Sidebar } from '.';

export const Layout = () => {
	return (

		<>
			<Header />

			<Sidebar />

			<Outlet />
		</>

	)
}
