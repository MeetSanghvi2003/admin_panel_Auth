import axios from "axios";

const Auth = axios.create({
  baseURL: "http://localhost:5000",
});

export default Auth;
