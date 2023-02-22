import { NavigationSideBar } from '../components/NavigationSideBar';

export const Sidebar = () => {

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
					/>
				</div>

				<NavigationSideBar />

			</div>
		</div>



	)
}
