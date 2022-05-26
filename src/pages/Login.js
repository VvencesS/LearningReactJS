import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import "../css/Login.css";

import { login } from "../actions/login";

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    dispatch(login(values.username));
    await history.push("/dashboard");
  };

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
            console.log(JSON.stringify(values, null, 2));
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

            <div style={{ paddingTop: 10 }}>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
