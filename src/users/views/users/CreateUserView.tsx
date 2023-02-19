import { Navigate } from "react-router-dom"

export const CreateUserView = () => {

	
	return (
		<div className="grid-form">

			<h1 className="title">Create a User</h1>
			<form className="form" >

				<label >Name</label>
				<input type="text" />

				<label>LastName</label>
				<input type="text" />

				<label>dependency</label>
				<input type="text" />

				<label>email</label>
				<input type="text" />

				<label>username</label>
				<input type="text" />


				<select className="select" name="rol" id="">
					<option value="">rol</option>
					<option value="1">user</option>
					<option value="2">shop</option>
					<option value="3">sales</option>
				</select>



				
				
				<input className="sub" type="submit" value="Create" />
			</form>
		</div>
	)
}
