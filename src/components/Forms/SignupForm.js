import axios from "axios";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { rememberUser, useForm } from "../../utils";

const SignupForm = ({ isLogin, setLoginStatus }) => {
    const [credentials, setCredentials] = useForm({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
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
            first_name: credentials.firstName,
            last_name: credentials.lastName,
        };
        if (credentials.password !== credentials.confirmPassword) {
            setError("Passwords don't match !!");
        } else {
            try {
                await axios.post("https://api.chatengine.io/users/", data, {
                    headers: headerObject,
                });
                rememberUser(credentials.username, credentials.password);
                setLoginStatus(true);
                setError("");
            } catch (err) {
                setError("Oops, signup failed !!");
            }
        }
    };
    if (isLogin) return <Redirect to="/" />;
    return (
        <div class="wrapper" style={{ overflow: "scroll" }}>
            <div class="form">
                <h1 className="title">Enichat</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        name="firstName"
                        type="text"
                        value={credentials.firstName}
                        className="input"
                        onChange={setCredentials}
                        placeholder="First Name"
                        required
                    />
                    <input
                        name="lastName"
                        type="text"
                        value={credentials.lastName}
                        className="input"
                        onChange={setCredentials}
                        placeholder="Last Name"
                        required
                    />
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
                            <Link to="/login" className="login-link">
                                {" "}
                                Log In{" "}
                            </Link>{" "}
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
