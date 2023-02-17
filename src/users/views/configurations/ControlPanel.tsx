import { Link } from "react-router-dom"

export const ControlPanel = () => {
	return (
		
		<>
		<Link to='/bookstore-app/control-panel/users' >User</Link>
		<Link to='/bookstore-app/control-panel/books' >Books</Link>
		<Link to='/bookstore-app/control-panel/costumers' >Costumers</Link>
		<Link to='/bookstore-app/control-panel/providers' >Providers</Link>
		</>
	)
}

