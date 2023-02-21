import { initialState, startAddNewUser } from "../../../store/user";

import { useForm } from "../../../hooks/useForm";
import { FormNewEditUser } from "../../components/FormNewEditUser";
import { User } from "../../interfaces";
import { formattingDate, generateId } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/app";

export const CreateUserView = () => {

	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		displayName,
		lastName,
		email,
		username,
		dependency,
		rol,
		onInputChange
	} = useForm(initialState);
	

	const onCreateNewUser = (e:React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();

		const newUser:User = {
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
		}		

		dispatch(startAddNewUser(newUser));

		navigate('/bookstore-app/control-panel/users')
	}

	return (

		<div className="grid-form">
			<h1 className="title">{ 'Create a User'}</h1>
			<form className="form" onSubmit={ onCreateNewUser }  >

				<label >Name</label>
				<input
					type="text"
					name="displayName"
					value={displayName}
					onChange={onInputChange}
				/>

				<label>LastName</label>
				<input
					type="text"
					name="lastName"
					value={lastName}
					onChange={onInputChange}
				/>

				<label>email</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={onInputChange}
				/>

				<label>username</label>
				<input type="text"
					name="username"
					value={username}
					onChange={onInputChange}
				/>

				<select
					className="select"
					name="dependency"
					value={dependency}
					onChange={onInputChange}

				>
					<option value="">dependency</option>
					<option value="administration">administration</option>
					<option value="shop">shop</option>
					<option value="sales">sales</option>
					<option value="humanity">Humanity</option>
				</select>

				<select
					className="select"
					name="rol"
					value={rol}
					onChange={onInputChange}
				>
					<option value="">rol</option>
					<option value="user">user</option>
					<option value="shop">shop</option>
					<option value="sales">sales</option>
				</select>

				<input className="sub" type="submit" value={'Create'} />
			</form>
		</div>

	)
}
