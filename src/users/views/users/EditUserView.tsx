import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../store/user";
import { useAppDispatch } from "../../hooks/app";
import { EditFormUser } from "./EditFormUser";

export const EditUserView = () => {

	const dispatch = useAppDispatch();
	const { userId } = useParams();

	if( typeof userId === 'undefined')return

	useEffect(() => {
		dispatch(getUserById(userId))
	}, [])	

	return (
		<div className="grid-form">

			<h1 className="title">Edit a User</h1>

			<EditFormUser/>
			
		</div>
	)
}
