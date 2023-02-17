import type {RouteObject} from 'react-router-dom'

export interface Routes {
	index?:boolean;
	path?:string;
	element?: React.ReactNode;
}