import { Link } from 'react-router-dom';

type Props = {
	title:string;
	src:string;
	alt:string
	paragraphTitle:string;
	paragraphSubTitle:string;
	to:string;
}

export const OptionsControlPanel = ({ 
		alt, 
		paragraphSubTitle, 
		paragraphTitle, 
		src, 
		title,
		to
	}:Props) => {

	return (
		<article className="card-menu">
			<Link className="card-menu__link" to={ to } >
				<h4>{ title }</h4>					
				<img className="card-menu__image" src={ src } alt={ alt } />					
				<p>{ paragraphTitle }</p>
				<p>{ paragraphSubTitle }</p>
			</Link>
		</article>
	)
}
