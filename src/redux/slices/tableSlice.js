import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTableData = createAsyncThunk(
	"tableData/getData",
	async () => {}
);

const name = "table";
const initialState = createInitialState();
const reducers = createReducers();
const extraReducers = createExtraReducers(getTableData);

export const tableSlice = createSlice({
	name,
	initialState,
	reducers,
	extraReducers,
});

function createInitialState() {
	return {
		currentData: [],
	};
}
function createReducers() {
	return {
		useDataSet: (state, { payload }) => {
			state.currentData = [...payload];
		},
		clearData: (state) => {
			state.currentData = [];
		},
	};
}
function createExtraReducers(thunk) {
	return (builder) => {
		const { fulfilled, pending } = thunk;

		// builder.addCase(fulfilled, (state, { payload }) => {
		// 	state.currentData = payload;
		// });
		// builder.addCase(pending, (state) => {
		// 	state.currentData = null;
		// });
	};
}

export const { useDataSet, clearData } = tableSlice.actions;

export default tableSlice.reducer;
