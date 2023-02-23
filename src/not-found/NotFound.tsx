import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export const NotFound = () => {

	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    }
    else if (error.status === 404) {
      // ...
    };

		return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
				<Link to='/bookstore-app' >Back</Link>
      </div>
    );
  } else if (error instanceof Error) {
    <div id="error-page">
      <h1>Oops! Unexpected Error</h1>
      <p>Something went wrong.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>;
  } else {
    return <h1>Oops! Unexpected Error</h1>;
  }
}
