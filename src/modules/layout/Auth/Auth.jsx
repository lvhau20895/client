import auth from "./auth.module.scss";
import { Outlet } from "react-router-dom";

const Auth = () => {
	return (
		<div className={auth.auth}>
			<Outlet />
		</div>
	);
};

export default Auth;
