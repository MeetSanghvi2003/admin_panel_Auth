import React, { useEffect, useState } from "react";
import sideImage from "../../images/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";

interface login {
  username: string;
  password: string;
}

const Signin = () => {
  const [type, setType] = useState<string>("password");

  const [data, setData] = useState<login>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const toggleType = () => {
    if (type !== "password") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.password.length < 8) {
      console.error("password should be 8 char");
      return;
    } else {
      Post(data);
      setData({
        ...data,
        username: "",
        password: "",
      });
    }
  };
  const Post = async (data: login) => {
    await axios
      .post(
        "/auth/user",
        {
          username: data.username,
          password: data.password,
        },
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => {
        if (!resp.data.auth) {
          return;
        } else {
          localStorage.setItem("auth", resp.data.auth);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="form-container-wrap">
        <div className="form-container">
          <div className="form-fheading">Shopp</div>
          <div className="form-sheading">Login to Your Account</div>
          <div className="form-content">
            <form onSubmit={onSubmit}>
              <div className="form-field100 form-field ">
                <div className="heading">Username</div>
                <input
                  type="text"
                  placeholder="Username..."
                  value={data.username}
                  name="username"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-field100 form-field ">
                <div className="heading">Password</div>
                <input
                  type={type}
                  placeholder="Password..."
                  value={data.password}
                  name="password"
                  onChange={handleChange}
                  autoComplete="off"
                  required
                />
                <i className="bi bi-eye eye" onClick={toggleType}></i>
              </div>
              <div className="form-field">
                <button>Login</button>
              </div>

              <div className="form-link">
                Don't have an account yet?
                <Link to="/signup">Signup</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="side-image">
          <img src={sideImage} alt="form-side" />
        </div>
      </div>
    </>
  );
};

export default Signin;
