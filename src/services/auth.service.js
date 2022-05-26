import axios from "axios";

const API_LOGIN_URL = "http://10.254.61.24:8095/api/login";

const login = (username, password) => {
  return axios
    .post(API_LOGIN_URL, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const LoginService = {
    login,
    logout,
  }

export default LoginService;
