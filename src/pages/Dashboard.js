import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import '../css/Login.css';

export default function Dashboard() {
  const username = useSelector((state) => state.loginReducer.username);

  return (
    <div className="login-wrapper">
      <h1>Dashboard</h1>
      <h2>Welcome {username}</h2>
      <Link to="/login">Log out</Link>
    </div>
  );
}
