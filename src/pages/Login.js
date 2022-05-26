import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import "../css/Login.css";

import { login } from "../actions/login";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.loginReducers);
  const { message } = useSelector((state) => state.message);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    setLoading(true);
    dispatch(login(values.username, values.password))
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="login-wrapper">
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleLogin(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </label>
            {errors.username && touched.username && errors.username}

            <label>
              <p>Password</p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </label>
            {errors.password && touched.password && errors.password}
            <div className="form-group">
              <button className="btn btn-primary btn-block" disabled={loading} type="submit">
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            {/* <div style={{ paddingTop: 10 }}>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div> */}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
