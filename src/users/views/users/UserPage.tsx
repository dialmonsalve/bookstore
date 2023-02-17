import { Link, Navigate } from "react-router-dom"


export const UserPage = () => {

	return (
		<>
		<div>UserPage</div>

			<Link to='/bookstore-app/control-panel/users/add'>Add</Link>
			<Link to='/bookstore-app/control-panel/users/edit'>Edit</Link>
		</>
	)
}
