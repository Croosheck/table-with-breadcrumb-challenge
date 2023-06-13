import "./ErrorPage.css";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			{!!error.data && <p>{error.data}</p>}
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
