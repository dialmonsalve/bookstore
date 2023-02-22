import { useEffect, useState } from "react";

import React from 'react'

export const useForm = <T>(initialForm:T) => {

	const [formState, setFormState] = useState<T>(initialForm);

	const onInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;

		setFormState( {
			...formState,
			[name]:value
		})
	};

	useEffect(() => {
		setFormState(initialForm);	
	}, [initialForm])
	

	return {
		...formState,
		formState,

		onInputChange

	}
}
