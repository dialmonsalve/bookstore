import type {RouteObject} from 'react-router-dom'

export interface Routes {
	path:string,
	element: React.ReactNode
	children:RouteObject[]
}