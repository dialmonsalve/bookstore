
export const LoginPage = () => {
	return (
		<div className="grid-form">

			<h1 className="title">Login</h1>
			<form className="form" >

				<label >user</label>
				<input type="text" />

				<label>password</label>
				<input type="password" />
				
				<input className="sub" type="submit" value="login" />
			</form>
		</div>
	)
}
