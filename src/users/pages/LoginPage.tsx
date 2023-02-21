import { useForm } from "../../hooks/useForm"
import { startLogin } from "../../store/auth";
import { useAppDispatch } from "../hooks/app";
import { FormLogin } from "../interfaces";

const user:FormLogin = {
	username: "admin",
	password: "1234567"
}

export const LoginPage = () => {

	const { formState, username, password, onInputChange } = useForm(user);
	const dispatch = useAppDispatch()

	const onLogin = async (e:React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		dispatch(startLogin({username, password}));//!implement
	}

	return (
		<div className="grid-form">

			<h1 className="title">Login</h1>
			<form className="form" onSubmit={onLogin} >

				<label >username</label>
				<input 
					name="username"
					value={username}
					type="text"
					onChange={onInputChange}
					/>

				<label>password</label>
				<input 
					name="password"
					type="password"
					value={password}
					onChange={onInputChange} 
				/>
				
				<input className="sub" type="submit" value="login" />
			</form>
		</div>
	)
}
