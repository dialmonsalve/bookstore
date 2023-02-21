import { useEffect } from 'react'
import { startLoadingUsers } from '../store/user'
import { useAppDispatch } from '../users/hooks/app'

export const useCheckAuth = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {		
			dispatch(startLoadingUsers())
	}, [])
	
}
