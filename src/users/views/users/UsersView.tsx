import { Link } from "react-router-dom";
import { useCheckAuth } from "../../../auth.ts/useCheckAuth";
import { useAppDispatch, useAppSelector } from "../../hooks/app";

export const UsersView = () => {

	const { users } = useAppSelector( state => state.user )
	const dispatch = useAppDispatch()

	useCheckAuth() //!Unabled when I will have finished the auth implementention

	return (
		<main>


		<h1 className="heading-primary">User Page</h1>	

		<div className="nav-page">
			<Link 
				className="btn-green"
				to= '/bookstore-app/control-panel'
			>Back
				
			</Link>			

			<Link to="/bookstore-app">
				<img src="/src/assets/sidebar/home.svg" alt="home" className="sidebar__icon" />
			</Link>
		</div>

		<section className="section-users">
			<table className="table">
				<thead>
					<tr>
						<th>id</th>
						<th>Name</th>
						<th>lastName</th>
						<th>dependency</th>
						<th>Email</th>
						<th>Actions</th>
						<th>Profile</th>
					</tr>
				</thead>
				<tbody>
					{
						users.map(user =>(

							<tr key={user.id}>
								<td>{ user.id }</td>
								<td>{ user.displayName }</td>
								<td>{ user.lastName }</td>
								<td>{ user.dependency }</td>
								<td>{ user.email }</td>
								<td>
									<Link 
										className="btn-blue"
										to= {`/bookstore-app/control-panel/users/${user.id}/edit`}
									>
										Edit
									</Link>

									<Link 
										className="btn-red"
										to='/bookstore-app/control-panel/users/edit'
									>
										Delete
									</Link>
								</td>		
								<td>{ user.rol }</td>
							</tr>
						))
					}
				</tbody>

			</table>
			
		</section>

		<Link to='/bookstore-app/control-panel/users/add'>
			<img 
				className="plus"
				src="/src/assets/menu/plus-solid.svg" 
				alt="add user" />
			</Link>

		</main>
		

	)
}
