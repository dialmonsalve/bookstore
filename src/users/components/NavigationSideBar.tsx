import { Link, useLocation } from 'react-router-dom';

export const NavigationSideBar = () => {

	const { pathname } = useLocation();

	return (
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
		</ul>
	</nav>
	)
}
