
export const Header = () => {
	return (
		<header className="header">
			<img src="/src/assets/logo/logo.svg" alt="logo" className="logo"/>
			<form action="#" className="search">
						<input type="text" className="search__input" placeholder="Search"/>
						<button className="search__button">
								<img src="/src/assets/magnifying-glass.svg"/>
					</button>
			</form>

			<nav className="user-nav">
					<div className="user-nav__icon-box">
						<img src="/src/assets/chat.svg"/>
						<span className="user-nav__notification">13</span>
					</div>
					<div className="user-nav__user">
							<img src="/src/assets/photo.svg" alt="User photo" className="user-nav__user-photo"/>
							<span className="user-nav__user-name">Diego</span>
					</div>
			</nav>
		</header>
	)
}

