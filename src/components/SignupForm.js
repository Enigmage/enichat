import axios from "axios";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useForm from "../utils/useForm";

const SignupForm = ({ isLogin, setLoginStatus }) => {
    const [credentials, setCredentials] = useForm({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const headerObject = {
            "PRIVATE-KEY": process.env.REACT_APP_PRIVATE_KEY,
        };
        const data = {
            username: credentials.username,
            secret: credentials.password,
        };
        if (credentials.password !== credentials.confirmPassword) {
            setError("Passwords don't match !!");
        } else {
            try {
                await axios.post("https://api.chatengine.io/users/", data, {
                    headers: headerObject,
                });
                localStorage.setItem("username", credentials.username);
                localStorage.setItem("password", credentials.password);
                setLoginStatus(true);
                setError("");
            } catch (err) {
                setError("Oops, signup failed !!");
            }
        }
    };
    if (isLogin) return <Redirect to="/" />;
    return (
        <div class="wrapper">
            <div class="form">
                <h1 className="title">Enichat</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="username"
                        type="text"
                        value={credentials.username}
                        className="input"
                        onChange={setCredentials}
                        placeholder="Username"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        value={credentials.password}
                        onChange={setCredentials}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <input
                        name="confirmPassword"
                        type="password"
                        value={credentials.confirmPassword}
                        onChange={setCredentials}
                        className="input"
                        placeholder="Confirm Password"
                        required
                    />
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Sign Up</span>
                        </button>
                    </div>
                </form>
                <div align="center">
                    <span style={{ color: "black" }}>
                        Already have an account ?{" "}
                        <span style={{ color: "blue" }}>
                            {" "}
                            <Link to="/login"> Log In </Link>{" "}
                        </span>
                    </span>
                </div>
                <div align="center">
                    <h1>
                        <span style={{ color: "black" }}>{error}</span>
                    </h1>
                </div>
            </div>
        </div>
    );
};
export default SignupForm;
