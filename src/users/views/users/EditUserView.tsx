import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { formattingDate } from '../../../helpers';
import { useForm } from '../../../hooks/useForm';
import { getUserById, setUser, startUpdateUser } from '../../../store/user';
import { FormCreateEditUser } from '../../components/FormCreateEditUser';
import { useAppDispatch, useAppSelector } from '../../hooks/app';
import { User } from '../../interfaces';

export const EditUserView = () => {

	const dispatch = useAppDispatch();

	const { active: user } = useAppSelector(state => state.user);
	const navigate = useNavigate();
	const { userId } = useParams();

	const {
		formState,
		displayName,
		lastName,
		username,
		dependency,
		rol,
		id,
		email,
		createAt,
		isAdmin,
		isNew,
		password,
		photoUrl,
		onInputChange,
	} = useForm(user)

	useEffect(() => {
		setUser(formState as User);
	}, [formState]);

	useEffect(() => {
		if (typeof userId === 'undefined') return;

		dispatch(getUserById(userId));
	}, []);


	const onUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (id === null) return;

		const updateUser: User = {
			id,
			createAt,
			dependency,
			displayName,
			email,
			isAdmin,
			isNew,
			lastName,
			password,
			photoUrl,
			rol,
			updateAt: formattingDate(Date.now()).toString(),
			username,
		}

		dispatch(startUpdateUser(id, updateUser));

		navigate('/bookstore-app/control-panel/users');
	}

	return (

		<FormCreateEditUser
			mode='update'
			onSubmit={onUpdateUser}
			onInputChange={onInputChange}
			displayName={displayName}
			lastName={lastName}
			email={email}
			username={username}
			dependency={dependency}
			rol={rol}
			isEditable={true}
		/>
	)
}
