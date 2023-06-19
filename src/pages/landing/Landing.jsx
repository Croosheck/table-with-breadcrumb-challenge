import "./Landing.css";
import { Link } from "react-router-dom";
import rickandmorty from "../../assets/rickandmorty.jpg";
import jokes from "../../assets/jokes.jpg";

function Landing() {
	return (
		<div className="landing-container">
			<div className="landing-menu-box">
				<Link className="landing-dataset" to={`/table/rickandmorty`}>
					<p>Rick & Morty</p>
					<img src={rickandmorty} className="theme-image" />
				</Link>
				<Link className="landing-dataset" to={`/table/jokes`}>
					<p>Jokes</p>
					<img src={jokes} className="theme-image" />
				</Link>
			</div>
		</div>
	);
}

export default Landing;
