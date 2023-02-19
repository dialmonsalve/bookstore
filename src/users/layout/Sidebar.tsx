import { Link, useLocation } from "react-router-dom"

export const Sidebar = () => {

	const { pathname } = useLocation()

	return (

		<div className="sidebar" >

			<input
				type="checkbox"
				className="sidebar__checkbox"
				id="side-toggle"
			/>
			<label
				htmlFor="side-toggle"
				className="sidebar__button"
			>
				<span
					className="sidebar__icon-menu"
				>
					&nbsp;
				</span>
			</label>

			<div className="sidebar__app"></div>

			<div className="sidebar__side" >

				<div className="sidebar-logo">
					<img
						className="sidebar-logo__logo"
						src="/src/assets/logo/logo.svg"
						alt="logo"
					/></div>

				<nav className="sidebar__nav">

					<ul className="sidebar__list">
						<li className="sidebar__item active" >
							<Link
								className={`sidebar__link ${pathname === '/bookstore-app' ? 'active' : ''}`}
								to="/bookstore-app"
							>
								<img className="sidebar__icon" src="/src/assets/sidebar/home.svg" alt="home" />
								<span >Home</span>
							</Link>
						</li>

						<li className="sidebar__item " >
							<Link
								className={`sidebar__link ${pathname === '/bookstore-app/shop' ? 'active' : ''}`}
								to=""
							>
								<img className="sidebar__icon" src="/src/assets/sidebar/shopping.svg" alt="shopping" />
								<span>Shop</span>
							</Link>
						</li>

						<li className="sidebar__item" >
							<Link
								className={`sidebar__link ${pathname === '/bookstore-app/sales' ? 'active' : ''}`}
								to="#">
								<img className="sidebar__icon" src="/src/assets/sidebar/sale.svg" alt="sales" />
								<span>Sales</span></Link>
						</li>

						<li className="sidebar__item" >
							<Link
								className={`sidebar__link ${pathname === '/bookstore-app/logistic' ? 'active' : ''}`}
								to="#"
							>
								<img className="sidebar__icon" src="/src/assets/sidebar/truck.svg" alt="truck" />
								<span>logistic</span>
							</Link>
						</li>

						<li className="sidebar__item" >
							<Link
								className={`sidebar__link ${pathname === '/bookstore-app/control-panel' ? 'active' : ''}`}
								to="/bookstore-app/control-panel"
							>
								<img className="sidebar__icon" src="/src/assets/sidebar/control.svg" alt="panel" />
								<span>Control Panel</span>
							</Link>
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
		</div>



	)
}
