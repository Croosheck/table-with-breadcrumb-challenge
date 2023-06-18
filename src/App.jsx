import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error/ErrorPage";
import Landing from "./pages/landing/Landing";
import Table from "./pages/table/Table";
import RecordDetails from "./pages/record/RecordDetails";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
	return (
		<div className="app-container">
			<div className="inner-container">
				<Routes>
					<Route
						path="/*"
						element={<Navigate replace to="/" />}
						errorElement={<ErrorPage />}
					/>
					<Route path="/" element={<Landing />} />
					<Route path="/table/:set" element={<Table />} />
					<Route path="/table/:set/:id" element={<RecordDetails />} />
				</Routes>
			</div>
			<Breadcrumbs />
		</div>
	);
}

export default App;
