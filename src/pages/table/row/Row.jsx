import "./Row.css";

function Row({
	onClick = () => {},
	tableData = [],
	rowData = {},
	id = Number(),
	isActive = Boolean(),
}) {
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
					<div className="active--row--container">
						<img src={rowData.image} />
						<div className="active-row--details-box">
							<h3>{rowData.name}</h3>
							<p>Species: {rowData.species}</p>
							<p>Gender: {rowData.gender}</p>
							<p>Status: {rowData.status}</p>
						</div>
					</div>
				</td>
			)}
		</tr>
	);
}

export default Row;
