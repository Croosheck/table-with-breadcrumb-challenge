import "./TableViewType.css";
import { useDispatch, useSelector } from "react-redux";
import { detailsViewType } from "../../redux/slices/tableSlice";
import { useEffect } from "react";

function TableViewType() {
	const { viewType } = useSelector((state) => state.tableReducer);
	const dispatch = useDispatch();

	function pickViewOptionHandler(e) {
		const option = e.target.value;

		dispatch(detailsViewType(option));
		localStorage.setItem("tableViewType", option);
	}

	useEffect(() => {
		const viewType = localStorage.getItem("tableViewType");

		if (viewType) dispatch(detailsViewType(viewType));
	}, []);

	return (
		<form
			onChange={(e) => pickViewOptionHandler(e)}
			className="view-type"
			defaultChecked
		>
			<div>
				<input
					type="radio"
					name="option"
					value="table"
					id="table"
					checked={viewType === "table"}
					readOnly
				/>
				<label htmlFor="table">Table</label>
			</div>

			<div>
				<input
					type="radio"
					name="option"
					value="window"
					id="window"
					checked={viewType === "window"}
					readOnly
				/>
				<label htmlFor="window">Window</label>
			</div>
		</form>
	);
}

export default TableViewType;
