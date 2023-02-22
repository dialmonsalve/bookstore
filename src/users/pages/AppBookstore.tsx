import { AppMain } from './AppMain';
import { LoginPage } from './LoginPage';

export const AppBookstore = () => {

	const status = 'authorized'

	return (

			status==='no-authorized'

				?<LoginPage/>

				: <AppMain/>
	)
}
