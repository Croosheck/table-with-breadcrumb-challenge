import "./RecordDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../helperFunctions/fetchData";

function RecordDetails() {
	const params = useParams();
	const [recordData, setRecordData] = useState({
		data: {},
		keys: [],
	});

	useEffect(() => {
		async function getRecordData() {
			if (params.set === "rickandmorty") {
				const data = await fetchData(
					`https://rickandmortyapi.com/api/character/${params.id}`
				);

				const filteredData = {};

				const allKeys = Object.keys(data);
				const filteredKeys = [
					allKeys[0],
					allKeys[1],
					allKeys[3],
					allKeys[2],
					allKeys[8],
				];

				filteredKeys.forEach((key) => (filteredData[key] = data[key]));

				setRecordData({
					data: filteredData,
					keys: filteredKeys,
				});
			}
		}

		getRecordData();
	}, []);

	return (
		<div className="record-details--container">
			{recordData.keys.length > 0 &&
				Object.keys(recordData.data).length > 0 && (
					<div className="record-details--inner-box">
						<picture>
							<source src={`${recordData.data[recordData.keys[4]]}`} />
							<img
								src={`${recordData.data[recordData.keys[4]]}`}
								alt="cartoon character"
								loading="lazy"
							/>
						</picture>
						<div id="record-details">
							<p>{`${recordData.keys[1]}: ${
								recordData.data[recordData.keys[1]]
							}`}</p>
							<p>{`${recordData.keys[2]}: ${
								recordData.data[recordData.keys[2]]
							}`}</p>
							<p>{`${recordData.keys[3]}: ${
								recordData.data[recordData.keys[3]]
							}`}</p>
						</div>
					</div>
				)}
		</div>
	);
}

export default RecordDetails;
