import React from "react";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Friends from "./components/friends";
import Login from "./components/login";
import AddFriend from "./components/addfriends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends} />
        <Route path="/addfriend" component={AddFriend} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
