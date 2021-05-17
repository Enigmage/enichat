import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { rememberUser, useForm } from "../../utils";

const LoginForm = ({ isLogin, setLoginStatus }) => {
    const [credentials, setCredentials] = useForm({
        username: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {
            "Project-ID": process.env.REACT_APP_PROJECT_ID,
            "User-Name": credentials.username,
            "User-Secret": credentials.password,
        };
        try {
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject,
            });
            rememberUser(credentials.username, credentials.password);
            setLoginStatus(true);
            setError("");
        } catch (err) {
            setError("Invalid credentials !!");
        }
    };
    if (isLogin) return <Redirect to="/" />;
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Enichat</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="username"
                        type="text"
                        value={credentials.username}
                        onChange={setCredentials}
                        className="input"
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
                    <div align="center">
                        <button className="button" type="submit">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
                <div align="center">
                    New user ?{" "}
                    <span style={{ color: "blue" }}>
                        {" "}
                        <Link to="/signup" className="signup-link">
                            {" "}
                            Sign Up
                        </Link>{" "}
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

export default LoginForm;
