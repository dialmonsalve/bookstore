import {Outlet} from 'react-router-dom';
import { Header, Sidebar } from '../components';

export const Layout = () => {
	return (

		<>
				<Header/>

				<Sidebar />

				<Outlet />
		</>
		
	)
}
