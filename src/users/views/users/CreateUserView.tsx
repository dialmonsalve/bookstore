import { useNavigate} from "react-router-dom";

import { initialState } from "../../../store/user";
import { startAddNewUser } from "../../../store/admin";
import { User } from "../../interfaces";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../hooks/app";
import { formattingDate, generateId } from "../../../helpers";


export const CreateUserView = () => {

	const {
		displayName,
		lastName,
		onInputChange,
		email,
		username,
		dependency,
		rol
	} = useForm(initialState);

	const dispatch = useAppDispatch();

	const navigate = useNavigate()

	const onCreateNewUser = (e:React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();

		const newUser:User = {
			id: generateId(),
			createAt: formattingDate(Date.now()),
			dependency,
			displayName,
			email,
			errorMessage: null,
			isAdmin: false,
			isNew: true,
			lastName,
			ok: true,
			password: '1234',
			photoUrl: '',
			rol,
			updateAt: null,
			username,
			status: "no-authenticated"
		}

		dispatch(startAddNewUser(newUser));

		navigate('/bookstore-app/control-panel/users')
	}


	
	return (
		<div className="grid-form">

			<h1 className="title">Create a User</h1>
			<form className="form"  onSubmit={ onCreateNewUser } >

				<label >Name</label>
				<input 
					type="text"
					name="displayName"
					value={ displayName }
					onChange={ onInputChange }
				/>

				<label>LastName</label>
				<input 
					type="text"
					name="lastName"
					value={ lastName }
					onChange={ onInputChange }
				/>

				<label>email</label>
				<input
					type="text"
					name="email"
					value={ email }
					onChange={ onInputChange }	
				/>

				<label>username</label>
				<input type="text"
					name="username"
					value={ username }
					onChange={ onInputChange }	
				/>

				<select
					className="select" 
					name="dependency" 
					onChange={ onInputChange }
					value={dependency}
					
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
					onChange={ onInputChange }
					value={rol}
				>
					<option value="">rol</option>
					<option value="user">user</option>
					<option value="shop">shop</option>
					<option value="sales">sales</option>
				</select>
				
				<input className="sub" type="submit" value="Create" />
			</form>
		</div>
	)
}
