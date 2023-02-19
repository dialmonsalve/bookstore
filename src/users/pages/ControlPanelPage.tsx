import { Link } from "react-router-dom"

export const ControlPanelPage = () => {

	return (
		
		<main >
			<h1 className="heading-primary">Menu</h1>

			<section className="section-menu">

				<article className="card-menu">
					<Link to='/bookstore-app/control-panel/users' className="card-menu__link" >
						<h4>Users</h4>					
						<img src="/src/assets/menu/user.svg" alt="customers" className="card-menu__image" />					
						<p>Manage your system users</p>
						<p>Create, edit and more...</p>
					</Link>
				</article>

				<article className="card-menu">
					<Link to='/bookstore-app/control-panel/books' className="card-menu__link" >
						<h4>Books</h4>
						<img src="/src/assets/menu/book.svg" alt="books" className="card-menu__image" />
						<p>Create your books</p>
						<p>Add, edit and more...</p>
					</Link>
				</article>

				<article className="card-menu">
					<Link to='/bookstore-app/control-panel/costumers' className="card-menu__link" >
						<h4>Costumers</h4>
						<img src="/src/assets/menu/customers.svg" alt="customers" className="card-menu__image" />
						<p>Manage your costumers</p>
						<p>Create, edit and more...</p>
					</Link>
				</article>

				<article className="card-menu">
					<Link to='/bookstore-app/control-panel/providers' className="card-menu__link" >
						<h4>Providers</h4>
						<img src="/src/assets/menu/provider.svg" alt="providers" className="card-menu__image" />
						<p>Manage your Providers</p>
						<p>Create, edit and more...</p>
					</Link>
				</article>

			</section>
		
		
		
		</main>
	)
}

