import { useNavigate } from 'react-router-dom';

import { User } from '../../interfaces';
import { useForm } from '../../../hooks/useForm';
import { useAppDispatch } from '../../hooks/app';
import { initialState, startAddNewUser } from '../../../store/user';
import { FormCreateEditUser } from '../../components/FormCreateEditUser';
import { formattingDate, generateId } from '../../../helpers';

export const CreateUserView = () => {

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const {
		displayName,
		lastName,
		email,
		username,
		dependency,
		rol,
		onInputChange
	} = useForm(initialState);

	const onCreateNewUser = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newUser: User = {
			createAt: formattingDate(Date.now()),
			dependency,
			displayName,
			email,
			id: generateId(),
			isAdmin: false,
			isNew: true,
			lastName,
			password: '1234',
			photoUrl: '',
			rol,
			updateAt: null,
			username,
		};
		dispatch(startAddNewUser(newUser));

		navigate('/bookstore-app/control-panel/users');
	};

	return (

		<FormCreateEditUser
			mode='create'
			onSubmit={onCreateNewUser}
			onInputChange={onInputChange}
			displayName={displayName}
			lastName={lastName}
			email={email}
			username={username}
			dependency={dependency}
			rol={rol}
			isEditable={false}
		/>
	)
}
