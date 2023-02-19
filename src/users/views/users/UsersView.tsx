import { Link } from "react-router-dom"
import { users } from "../../../data/users/users"

export const UsersView = () => {

	return (
		<main>

		<h1 className="heading-primary">User Page</h1>		

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
								<td>{ user.name }</td>
								<td>{ user.lastName }</td>
								<td>{ user.dependency }</td>
								<td>{ user.Email }</td>
								<td>
									<Link 
										className="btn-blue"
										to='/bookstore-app/control-panel/users/edit'
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
