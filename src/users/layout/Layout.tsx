import {Outlet} from 'react-router-dom';
import { Header, Sidebar } from '../components';

export const Layout = () => {
	return (

		<>
			<div className='app'></div>
				<Header/>

				<Sidebar />

				<Outlet />
		</>
		
	)
}
