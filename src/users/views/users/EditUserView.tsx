import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import { getUserById } from "../../../store/admin";
import { useAppDispatch, useAppSelector } from "../../hooks/app";

const userActive={}
export const EditUserView = () => {

	const { onInputChange } = useForm({})

	const dispatch = useAppDispatch();
	const { active:user } = useAppSelector(state => state.admin);
	const { userId } = useParams();

	if( typeof userId === 'undefined')return

	useEffect(() => {
		// dispatch(getUserById(userId))		
	}, [])

	return (
		<div className="grid-form">

			<h1 className="title">Edit a User</h1>
			<form className="form"   >

				<label >Name</label>
				<input 
					type="text"
					name="displayName"
					defaultValue={ user?.displayName }
					onChange={ onInputChange }
				/>

				<label>LastName</label>
				<input 
					type="text"
					name="lastName"
					defaultValue={ user?.lastName }
					onChange={ onInputChange }
				/>

				<label>email</label>
				<input
					type="text"
					name="email"
					defaultValue={ user?.email }
					onChange={ onInputChange }	
				/>

				<label>username</label>
				<input type="text"
					name="username"
					defaultValue={ user?.username }
					onChange={ onInputChange }	
				/>

				<select
					className="select" 
					name="dependency" 
					onChange={ onInputChange }
					defaultValue={user?.dependency}
					
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
					value={user?.rol}
				>
					<option value="">rol</option>
					<option value="user">user</option>
					<option value="shop">shop</option>
					<option value="sales">sales</option>
				</select>
				
				<input className="sub" type="submit" value="Update" />
			</form>
		</div>
	)
}
