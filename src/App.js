import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Dashboard from "./pages/Dashboard.js";
import Login from "./pages/Login.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
