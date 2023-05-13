import { useRef, useState } from "react";
import login from "./login.module.scss";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { HiOutlineKey } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const passwordRef = useRef();

	const handleSubmit = e => {
		e.preventDefault();
	};

	const handleShowPass = e => {
		e.preventDefault();
		if (e.button === 0) {
			setShowPassword(!showPassword);
		}
	};

	return (
		<div className={login.login}>
			<form className={login.form} onSubmit={handleSubmit}>
				<div className={login.title}>Sign In</div>

				<div className={login.group}>
					<span className={login.icon}>
						<BiUser />
					</span>
					<div className={login.control}>
						<input
							id="username"
							type="text"
							placeholder=" "
							spellCheck="false"
							autoComplete="off"
						/>
						<label htmlFor="username">Username</label>
					</div>
				</div>

				<div className={login.group}>
					<span className={login.icon}>
						<HiOutlineKey />
					</span>
					<div className={login.control}>
						<input
							ref={passwordRef}
							id="password"
							className={login.password}
							type={showPassword ? "text" : "password"}
							placeholder=" "
							spellCheck="false"
							autoComplete="off"
						/>
						<label htmlFor="password">Password</label>
						<button
							className={login.showPassword}
							onMouseDown={handleShowPass}
						>
							{showPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
						</button>
					</div>
				</div>

				<div className={login.button}>
					<button type="submit">Sign In</button>
				</div>

				<div className={login.help}>
					<span>
						Don't have an account?{" "}
						<Link to="/register" className={login.link}>
							Sign Up
						</Link>
					</span>

					<Link to="/forgot" className={login.forgot}>
						Forgot password?
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
