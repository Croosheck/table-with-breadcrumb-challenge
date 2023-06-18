import "./Landing.css";
import { fetchData } from "../../helperFunctions/fetchData";
import { Link } from "react-router-dom";

function Landing() {
	async function testHandler() {
		const page1 = await fetchData("https://rickandmortyapi.com/api/character");
		const page2 = await fetchData(page1.info.next);
		const page3 = await fetchData(page2.info.next);

		console.log("page1", page1);
		console.log("page2", page2);
		console.log("page3", page3);
	}

	return (
		<div className="landing-container">
			<div className="landing-menu-box">
				<Link className="landing-dataset" to={`/table/rickandmorty`}>
					Rick & Morty
				</Link>
				<Link className="landing-dataset" to={`/table/ships`}>
					Ships
				</Link>
				<button onClick={testHandler}>Test</button>
			</div>
		</div>
	);
}

export default Landing;
