import "./Table.css";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DUMMY_DATA } from "../../utils/DUMMY_DATA";
import { useEffect, useState } from "react";
import { useDataSet } from "../../redux/slices/tableSlice";
import { fetchData } from "../../helperFunctions/fetchData";
import Row from "./row/Row";

function Table() {
	const [tableData, setTableData] = useState({
		data: [],
		columns: [],
	});
	const [activeRow, setActiveRow] = useState({
		id: 0,
	});

	const dispatch = useDispatch();

	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		async function getTableData() {
			if (params.set === "rickandmorty") {
				const page1 = await fetchData(
					"https://rickandmortyapi.com/api/character"
				);
				const allKeys = Object.keys(page1.results[0]);

				setTableData({
					data: page1.results,
					columns: [allKeys[0], allKeys[1], allKeys[3], allKeys[2]],
				});
			}

			// dispatch(useDataSet(page1.results));
		}

		getTableData();

		// const data = DUMMY_DATA[params.set];
		// const columns = Object.keys(data[0]);

		// setTableData({
		// 	data: data,
		// 	columns: columns,
		// });
	}, []);

	function navigateHandler(row) {
		// navigate(`${row[tableData.columns[0]]}`);

		setActiveRow({
			id: row.id,
		});
	}

	return (
		<div className="table-container">
			<table>
				<thead>
					<tr>
						{tableData.columns.map((column) => (
							<th key={column}>{column}</th>
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
							/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Table;
