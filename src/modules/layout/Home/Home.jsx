import React from "react";
import { Outlet } from "react-router-dom";
import home from "./home.module.scss";

const Home = () => {
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default Home;
