import { Route, Routes } from "react-router-dom";
import Home from "modules/layout/Home";
import Auth from "modules/layout/Auth";
import Login from "modules/pages/Login";
import Register from "modules/pages/Register";
import RoomList from "modules/pages/RoomList";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<RoomList />} />
				</Route>

				<Route path="/" element={<Auth />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
