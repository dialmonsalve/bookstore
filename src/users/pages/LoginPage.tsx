import { startLogin } from '../../store/auth';
import { useForm } from '../../hooks/useForm';
import { FormLogin } from '../interfaces';
import { useAppDispatch } from '../hooks/app';

const user: FormLogin = {
	username: "admin",
	password: "1234567"
};

export const LoginPage = () => {

	const { username, password, onInputChange } = useForm(user);
	const dispatch = useAppDispatch();

	const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(startLogin({ username, password }));//!implement
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
