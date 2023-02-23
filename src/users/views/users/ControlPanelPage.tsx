import { OptionsControlPanel } from '../../components/OptionsControlPanel'

export const ControlPanelPage = () => {

	return (

		<>
			<h1 className="heading-primary">Menu</h1>

			<section className="section-menu">

				<OptionsControlPanel
					alt="users"
					paragraphTitle="Manage your system users"
					paragraphSubTitle="Create, edit and more..."
					src="/src/assets/menu/user.svg"
					title="Users"
					to="/bookstore-app/control-panel/users"
				/>

				<OptionsControlPanel
					alt="books"
					paragraphTitle="Create your books"
					paragraphSubTitle="Add, edit and more..."
					src="/src/assets/menu/book.svg"
					title="Books"
					to="/bookstore-app/control-panel/books"
				/>

				<OptionsControlPanel
					alt="customers"
					paragraphTitle="Manage your costumers"
					paragraphSubTitle="Create, edit and more..."
					src="/src/assets/menu/customers.svg"
					title="Costumers"
					to="/bookstore-app/control-panel/costumers"
				/>

				<OptionsControlPanel
					alt="providers"
					paragraphTitle="Manage your Providers"
					paragraphSubTitle="Create, edit and more..."
					src="/src/assets/menu/provider.svg"
					title="Providers"
					to="/bookstore-app/control-panel/providers"
				/>
			</section>

		</>
	)
}

