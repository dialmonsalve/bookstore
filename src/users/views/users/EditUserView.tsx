import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formattingDate } from "../../../helpers";
import { useForm } from "../../../hooks/useForm";
import { getUserById, setClearUser, setUser, startUpdateUser } from "../../../store/user";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { User } from "../../interfaces";

export const EditUserView = () => {

	const dispatch = useAppDispatch();

	const { active: user } = useAppSelector(state => state.user);
	const { userId } = useParams();
	const navigate = useNavigate();
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
		setUser(formState as User)
	}, [formState])

	useEffect(() => {
		if (typeof userId === 'undefined') return
		
		dispatch(getUserById(userId))
	}, [])


	const onUpdateUser = (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault()

		if(id === null ) return

		const updateUser:User = {
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
		navigate('/bookstore-app/control-panel/users')
	}

	return (

		<div className="grid-form">
			<h1 className="title">{'Edit User'}</h1>
			<form className="form" onSubmit={ onUpdateUser }  >

				<label >Name</label>
				<input
					type="text"
					name="displayName"
					defaultValue={displayName}
					onChange={onInputChange}
				/>

				<label>LastName</label>
				<input
					type="text"
					name="lastName"
					defaultValue={lastName}
					onChange={onInputChange}
				/>

				<label>email</label>
				<input
					type="text"
					name="email"
					defaultValue={email}
					onChange={onInputChange}
				/>

				<label>username</label>
				<input type="text"
					name="username"
					defaultValue={username}
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

				<input className="sub" type="submit" value={'Update'} />
			</form>
		</div>

	)
}
