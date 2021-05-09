//Imports
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import Home from "./components/Home";
import "./App.css";

const App = () => {
    const initialValue = localStorage.getItem('username') ? true : false;
    const [isLogin, setLogin] = useState(initialValue);
    const setLoginStatus = (value) => setLogin(value);
    return (
        <Switch>
            <Route path="/" exact render={() => <Home isLogin={isLogin} />} />
            <Route
                path="/login"
                exact
                render={() => (
                    <LoginForm
                        isLogin={isLogin}
                        setLoginStatus={setLoginStatus}
                    />
                )}
            />
            <Route
                path="/signup"
                exact
                render={() => (
                    <SignupForm
                        isLogin={isLogin}
                        setLoginStatus={setLoginStatus}
                    />
                )}
            />
            <Route
                render={() => (
                    <div>
                        <h1>Oops, wrong URL !!</h1>
                    </div>
                )}
            />
        </Switch>
    );
};

export default App;
