import {Outlet} from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

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
