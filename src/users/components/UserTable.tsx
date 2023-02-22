
import { Link, redirect } from 'react-router-dom';
import { setClearUser, startDeletingUser } from '../../store/user';
import { useAppDispatch } from '../hooks/app';
import { User } from '../interfaces';

type Props = {
	user: User;
};

export const UserTable = ({ user }: Props) => {

	const dispatch = useAppDispatch();

	const onClearState = () => {
		dispatch(setClearUser());
	}

	const onDeleteUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (user.id === null) return;
		dispatch(startDeletingUser(user.id));
		redirect('/bookstore-app/control-panel');
	}

	return (
		<>
			<td>{user.id}</td>
			<td>{user.displayName}</td>
			<td>{user.lastName}</td>
			<td>{user.dependency}</td>
			<td>{user.email}</td>
			<td className="buttons-user">
				<Link
					className="btn-blue"
					to={`/bookstore-app/control-panel/users/${user.id}/edit`}
					onClick={onClearState}
				>
					Edit
				</Link>

				<form
					onSubmit={onDeleteUser}
					method="post"
					action={`/bookstore-app/control-panel/users/${user.id}/delete`}>
					<input
						className="btn-red"
						type='submit'
						value='delete'
					>
					</input>
				</form>
			</td>
			<td>{user.rol}</td>

		</>
	)
}
