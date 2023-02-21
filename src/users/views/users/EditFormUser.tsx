import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { formattingDate } from "../../../helpers";
import { useForm } from "../../../hooks/useForm";
import { setUser, startUpdateUser } from "../../../store/user";
import { useAppDispatch, useAppSelector } from "../../hooks/app";
import { User } from "../../interfaces"; 

export const EditFormUser = () => {

	const { active:user } = useAppSelector(state => state.user);
	const { formState, displayName, lastName, username, dependency, rol, onInputChange, id, } = useForm(user)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	useEffect(() => {
		setUser(formState as User)
	}, [formState])


	const onUpdateUser =(e:React.FormEvent<HTMLFormElement>) =>{

		e.preventDefault()


		dispatch(startUpdateUser(id, {updateAt:formattingDate(Date.now()).toString() ,...formState}))

		navigate('/bookstore-app/control-panel/users')


	}

	return (
		<form className="form" onSubmit={ onUpdateUser }  >

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
					value={ user?.email }
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
				
				<input className="sub" type="submit" value="Update" />
			</form>
	)
}
