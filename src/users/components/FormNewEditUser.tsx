import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { User } from "../interfaces";

type Props = {
	mode:'create' | 'edit';
	data:User,
	onSubmit:(e: React.FormEvent<HTMLFormElement>)=>void;
	onInputChange:(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void;
}

export const FormNewEditUser = ({ mode, data, onSubmit, onInputChange}:Props) => {

	const [{ displayName, lastName, email, username, dependency, rol }, setForm ]= useState(data)

	return (

		<div className="grid-form">
			<h1 className="title">{ mode ==='create' ? 'Create a User' : 'Edit User'}</h1>
			<form className="form" onSubmit={ onSubmit }  >

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

				<input className="sub" type="submit" value={mode ==='create' ? 'Create' : 'Update'} />
			</form>
		</div>
	)
}
