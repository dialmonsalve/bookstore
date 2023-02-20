import { useEffect } from 'react'
import { startLoadingUsers } from '../store/admin'
import { useAppDispatch } from '../users/hooks/app'

export const useCheckAuth = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {		
			dispatch(startLoadingUsers())
	}, [])
	
}
