import { Link } from "react-router-dom"

export const UserPage = () => {

	return (
		<main >

		<h1 className="heading-primary">User Page</h1>		

		<div className="section-menu">
			<table style={{ backgroundColor:'red' }}>

			</table>
			<Link to='/bookstore-app/control-panel/users/edit'>Edit</Link>
		</div>

		<Link to='/bookstore-app/control-panel/users/add'>
			<img 
				className="plus"
				src="/src/assets/menu/plus-solid.svg" 
				alt="add user" />
			</Link>

		</main>
		

	)
}
