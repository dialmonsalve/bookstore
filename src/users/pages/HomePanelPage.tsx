import { useCheckAuth } from "../../auth.ts/useCheckAuth"

export const HomePanelPage = () => {

	useCheckAuth()

	return (
		<div>HomePanel</div>
	)
}
