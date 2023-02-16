import { Link } from "react-router-dom"

export const Sidebar = () => {
	return (

			<div className="content" >

				<div className="sidebar-logo">
					<img className="sidebar-logo__logo"  src="/src/assets/logo/logo.svg" alt="logo"/>
				</div>

				<nav  className="sidebar">
					
					<ul className="side-nav">
						<li className="side-nav__item" >
							<Link className="side-nav__link" to="/bookstore-app">
								<img className="side-nav__icon" src="/src/assets/sidebar/home.svg" alt="home" />
								<span>Home</span></Link>
						</li>
						<li className="side-nav__item" >
							<Link className="side-nav__link" to="">
								<img className="side-nav__icon" src="/src/assets/sidebar/shopping.svg" alt="shopping" />
								<span>Shop</span></Link>
						</li>

						<li className="side-nav__item" >
							<a className="side-nav__link" href="#">
							<img className="side-nav__icon" src="/src/assets/sidebar/sale.svg" alt="sales" />
								<span>Sales</span></a>
						</li>

						<li className="side-nav__item" >
							<a className="side-nav__link" href="#">
								<img className="side-nav__icon" src="/src/assets/sidebar/truck.svg" alt="truck" />
								<span>logistic</span></a>
						</li>
						<li className="side-nav__item" >
							<Link className="side-nav__link" to="/bookstore-app/control-panel">
								<img className="side-nav__icon" src="/src/assets/sidebar/control.svg" alt="panel" />
								<span>Control Panel</span></Link>
						</li>
							
						{/* <li className="side-nav__item" >
							<a className="side-nav__link" href="#">
								<img className="side-nav__icon" src="/src/assets/sidebar/customers.svg" alt="customers" />
								<span>costumers</span></a>
						</li>

						<li className="side-nav__item" >
							<a className="side-nav__link" href="#">
								<img className="side-nav__icon" src="/src/assets/sidebar/user.svg" alt="user" />
								<span>users</span></a>
						</li> */}
					</ul>
				</nav>

			</div>

	)
}
