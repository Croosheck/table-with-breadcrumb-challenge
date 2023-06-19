import "./Table.css";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../helperFunctions/fetchData";
import Row from "./row/Row";
import TableViewType from "../../components/tableViewType/TableViewType";

function Table() {
	const [tableData, setTableData] = useState({
		data: [],
		columns: [],
	});
	const [activeRow, setActiveRow] = useState({
		id: 0,
	});

	const { viewType } = useSelector((state) => state.tableReducer);

	const navigate = useNavigate();
	const params = useParams();

	async function getJokes() {
		const data = await fetchData("https://v2.jokeapi.dev/joke/Any?amount=10");

		setTableData({
			data: data.jokes,
			columns: ["id", "category", "type", "lang"],
		});
	}

	async function getRickyAndMorty() {
		const page1 = await fetchData("https://rickandmortyapi.com/api/character");
		const allKeys = Object.keys(page1.results[0]);

		setTableData({
			data: page1.results,
			columns: [allKeys[0], allKeys[1], allKeys[3], allKeys[2]],
		});
	}

	useEffect(() => {
		async function getTableData() {
			if (params.set === "rickandmorty") getRickyAndMorty();
			if (params.set === "jokes") getJokes();
		}

		getTableData();
	}, []);

	function navigateHandler(row) {
		if (viewType === "window" && params.set === "rickandmorty") {
			navigate(`${row[tableData.columns[0]]}`);
		}

		if (viewType === "table" || params.set === "jokes") {
			setActiveRow({
				id: row.id,
			});
		}
	}

	return (
		<div className="table-container">
			{params.set === "rickandmorty" && <TableViewType />}
			<table>
				<thead>
					<tr>
						{tableData.columns.map((column, index) => (
							<th key={column + index}>{column}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{tableData.data.map((row) => {
						return (
							<Row
								onClick={navigateHandler.bind(this, row)}
								tableData={tableData}
								key={row.id}
								id={row.id}
								rowData={row}
								isActive={activeRow.id === row.id}
								type={params.set}
							/>
						);
					})}
				</tbody>
			</table>
			{params.set === "jokes" && <button onClick={getJokes}>Shuffle</button>}
		</div>
	);
}

export default Table;
