import { useState } from "react";
import "./Row.css";

function Row({
	onClick = () => {},
	tableData = {},
	rowData = {},
	id = Number(),
	isActive = Boolean(),
	type = "",
}) {
	const [isDeliveryVisible, setIsDeliveryVisible] = useState(false);

	function onRowClickHandler() {
		onClick();
	}

	return (
		<tr
			className={`table--data-row ${isActive && "active--row"}`}
			id={id}
			onClick={onRowClickHandler}
		>
			{!isActive ? (
				tableData.columns.map((col, index) => {
					return <td key={index}>{rowData[col]}</td>;
				})
			) : (
				<td colSpan={4}>
					{type === "rickandmorty" && (
						<div className="active--row--container">
							<img src={rowData.image} />
							<div className="active-row--details-box">
								<h3>{rowData.name}</h3>
								<p>Species: {rowData.species}</p>
								<p>Gender: {rowData.gender}</p>
								<p>Status: {rowData.status}</p>
							</div>
						</div>
					)}

					{type === "jokes" && (
						<div className="active--row--container">
							<div className="active-row--details-box">
								{rowData.type === "single" && (
									<p id="single-joke">{rowData.joke}</p>
								)}
								{rowData.type === "twopart" && (
									<div>
										<p>{rowData.setup}</p>

										{isDeliveryVisible ? (
											<p>{rowData.delivery}</p>
										) : (
											<button
												className="twopart-reveal"
												onClick={() => setIsDeliveryVisible(true)}
											>
												Reveal!
											</button>
										)}
									</div>
								)}
							</div>
						</div>
					)}
				</td>
			)}
		</tr>
	);
}

export default Row;
