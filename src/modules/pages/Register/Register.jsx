import React, { useRef, useState } from "react";
import register from "./register.module.scss";
import { BiArrowBack, BiLock, BiUser } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { RiEye2Line, RiEyeCloseLine } from "react-icons/ri";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { Link } from "react-router-dom";

const Register = () => {
	const [showPassword, setShowPassword] = useState({
		password: false,
		confirmPassword: false
	});
	const [values, setValues] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	});
	const [errors, setErrors] = useState({});

	const passwordRef = useRef(null);
	const confirmPasswordRef = useRef(null);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleBlur = e => {
		const { name } = e.target;
		const message = validation();
		setErrors({ ...errors, [name]: message[name] });
	};

	const validation = () => {
		const { email, username, password, confirmPassword } = values;
		const message = {};
		if (username === "") {
			message.username = "Please enter your username";
		} else if (username.length < 5 || username.length > 10) {
			message.username = "Username from 5 to 10 character";
		}

		if (email === "") {
			message.email = "Please enter your email";
		} else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,3}$/.test(email)) {
			message.email = "Invalid email";
		}

		if (password === "") {
			message.password = "Please enter your password";
		} else if (password.length < 5 || password.length > 10) {
			message.password = "Password from 5 to 10 character";
		}

		if (confirmPassword === "") {
			message.confirmPassword = "Please enter your confirmPassword";
		} else if (confirmPassword !== password) {
			message.confirmPassword = "Incorrect password";
		}

		return message;
	};

	const handleShowPassword = (e, type) => {
		e.preventDefault();
		if (e.button === 0) {
			type === "password"
				? setShowPassword({
						...showPassword,
						password: !showPassword.password
				  })
				: setShowPassword({
						...showPassword,
						confirmPassword: !showPassword.confirmPassword
				  });
		}
	};

	const handleSubmit = e => {
		e.preventDefault();
		const message = validation();

		if (Object.keys(message).length > 0) {
			return setErrors(message);
		}

		const { confirmPassword, ...newValues } = values;
		console.log(newValues);
	};

	return (
		<div className={register.register}>
			<form className={register.form} onSubmit={handleSubmit}>
				<span className={register.back}>
					<Link to="/login">
						<BiArrowBack />
					</Link>
				</span>

				<div className={register.title}>Sign Up</div>

				<div className={register.group}>
					<span className={register.icon}>
						<BiUser />
					</span>
					<div className={register.control}>
						<input
							id="username"
							type="text"
							placeholder=" "
							spellCheck="false"
							autoComplete="off"
							tabIndex="2"
							name="username"
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="username">Username</label>
					</div>
					{errors.username && (
						<span className={register.message}>
							* {errors.username}
						</span>
					)}
				</div>

				<div className={register.group}>
					<span className={register.icon}>
						<GoMail />
					</span>
					<div className={register.control}>
						<input
							id="email"
							type="text"
							placeholder=" "
							spellCheck="false"
							autoComplete="off"
							tabIndex="1"
							name="email"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="phone">Email</label>
					</div>
					{errors.email && (
						<span className={register.message}>
							* {errors.email}
						</span>
					)}
				</div>

				<div className={register.group}>
					<span className={register.icon}>
						<BiLock />
					</span>
					<div className={register.control}>
						<input
							ref={passwordRef}
							id="password"
							className={register.password}
							type={showPassword.password ? "text" : "password"}
							placeholder=" "
							spellCheck="false"
							autoComplete="off"
							tabIndex="3"
							name="password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="password">Password</label>
						<button
							className={register.showPassword}
							onMouseDown={e => handleShowPassword(e, "password")}
						>
							{showPassword.password ? (
								<RiEye2Line />
							) : (
								<RiEyeCloseLine />
							)}
						</button>
					</div>
					{errors.password && (
						<span className={register.message}>
							* {errors.password}
						</span>
					)}
				</div>

				<div className={register.group}>
					<span className={register.icon}>
						<GiAnticlockwiseRotation />
					</span>
					<div className={register.control}>
						<input
							ref={confirmPasswordRef}
							id="confirm-password"
							className={register.password}
							type={
								showPassword.confirmPassword
									? "text"
									: "password"
							}
							placeholder=" "
							spellCheck="false"
							autoComplete="off"
							tabIndex="4"
							name="confirmPassword"
							value={values.confirmPassword}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						<label htmlFor="confirm-password">
							Confirm password
						</label>
						<button
							className={register.showPassword}
							onMouseDown={e =>
								handleShowPassword(e, "confirmPassword")
							}
						>
							{showPassword.confirmPassword ? (
								<RiEye2Line />
							) : (
								<RiEyeCloseLine />
							)}
						</button>
					</div>
					{errors.confirmPassword && (
						<span className={register.message}>
							* {errors.confirmPassword}
						</span>
					)}
				</div>

				<div className={register.button}>
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
