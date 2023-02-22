import { NotPermission } from '../../not-found';
import { useAppSelector } from '../hooks/app';
import { UsersView } from '../views/users';

export const IsAdmin = () => {

	// const { isAdmin } = useAppSelector(state => state.auth)

	const isAdmin  = true;

	return (

		isAdmin ?
			<UsersView />	
			: 
			<NotPermission />

	)
}
