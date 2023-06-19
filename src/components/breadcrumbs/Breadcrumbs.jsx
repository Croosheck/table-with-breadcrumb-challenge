import "./Breadcrumbs.css";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
	const location = useLocation();
	const breadcrumbsPath = location.pathname
		.split("/")
		.slice(1)
		.map((item) => item.replace(/%20/g, " "));

	return (
		<div className="breadcrumbs-container">
			<Link to="/" className="breadcrumb-link">
				Main
			</Link>
			{breadcrumbsPath.map((dir, idx) => {
				if (dir === "table") return;

				return (
					<Link
						key={idx}
						to={[...breadcrumbsPath].slice(0, idx + 1).join("/")}
						className="breadcrumb-link"
					>
						{dir}
					</Link>
				);
			})}
		</div>
	);
}

export default Breadcrumbs;
