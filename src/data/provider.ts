import { Auth, FormLogin } from "../users/interfaces";

export const getUserByUsernameAndPassword = async({username, password}: FormLogin)=> {

	const result = await  fetch(`${import.meta.env.VITE_API_URL}`);
	const users:Auth[] = await result.json()

	const findUser:Auth | undefined = users.find( user => {
			return user.username === username && user.password === password
		})

		if(typeof findUser === 'undefined') {
			const errorMessage = 'User dont exist, please try again'
			return {
				ok:false,
				errorMessage
			}
		}

		const { id,  photoUrl, createAt, email, dependency, displayName, isAdmin, isNew,lastName,rol,   updateAt} = findUser	
		return {
			ok:true,
			id, username, photoUrl,
			createAt, email, dependency, 
			displayName, isAdmin, isNew,
			lastName, rol, updateAt, password
		}
}