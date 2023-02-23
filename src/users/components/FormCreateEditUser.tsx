type Props = {
	isEditable: boolean;
	displayName: string;
	lastName: string;
	email: string;
	username: string;
	dependency: string;
	rol: string;
	mode: string;
	onSubmit: ( e: React.FormEvent<HTMLFormElement> ) => void;
	onInputChange: ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void;
};

export const FormCreateEditUser = ({ displayName, lastName, email, username, dependency, rol, mode, onSubmit, onInputChange, isEditable }: Props) => {

	return (
		<div className="grid-form">
			<h1 className="title">{mode === 'create' ? 'Create User' : 'Edit User'}</h1>
			<form className="form" onSubmit={onSubmit}  >

				<label >Name</label>
				<input
					type="text"
					name="displayName"
					// value={ !isEditable ? displayName : undefined }
					defaultValue={isEditable ? displayName : undefined}
					onChange={onInputChange}
				/>

				<label>LastName</label>
				<input
					type="text"
					name="lastName"
					// value={ !isEditable ? lastName : undefined }
					defaultValue={isEditable ? lastName : undefined}
					onChange={onInputChange}
				/>

				<label>email</label>
				<input
					type="text"
					name="email"
					// value={ !isEditable ? email : undefined }
					defaultValue={isEditable ? email : undefined}
					onChange={onInputChange}
				/>

				<label>username</label>
				<input type="text"
					name="username"
					// value={ !isEditable ? username : undefined }
					defaultValue={isEditable ? username : undefined}
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

				<input className="sub" type="submit" value={mode === 'create' ? 'Create' : 'Update User'} />
			</form>
		</div>
	)
}
