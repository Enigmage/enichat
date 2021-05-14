import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginForm, SignupForm, Home } from "./components";
import "./App.css";

const App = () => {
    const [isLogin, setLogin] = useState(() =>
        localStorage.getItem("username") ? true : false
    );
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
