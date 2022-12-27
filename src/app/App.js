import React from "react";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import AllUsers from "./components/allUsers";
import User from "./components/user";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/allUsers/:userId" component={User} />
                <Route path="/allUsers" component={AllUsers} />
                <Route exact path="/" component={Main} />
            </Switch>
        </>
    );
}

export default App;
