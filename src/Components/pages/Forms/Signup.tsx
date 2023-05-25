import React, { useState } from "react";
import sideImage from "../../images/signup.jpg";
import { Link } from "react-router-dom";
import axios from "../axios";

interface register {
  first_name: string;
  last_name: string;
  username: string;
  phone?: number;
  email: string;
  password: string;
  confirm_password: string;
}

const Signup = () => {
  const [type, setType] = useState<string>("password");
  const [data, setData] = useState<register>({
    first_name: "",
    last_name: "",
    username: "",
    phone: 0,
    email: "",
    password: "",
    confirm_password: "",
  });

  const toggleType = (): void => {
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
      if (data.password !== data.confirm_password) {
        console.error("password aren't same");
        return;
      } else {
        Post(data);
        setData({
          ...data,
          first_name: "",
          last_name: "",
          email: "",
          phone: 0,
          password: "",
          confirm_password: "",
          username: "",
        });
      }
    }
  };

  const Post = async ({
    first_name,
    last_name,
    email,
    password,
    phone,
    username,
  }: register) => {
    await axios
      .post(
        "/auth/createuser",
        {
          first_name,
          last_name,
          email,
          phone,
          username,
          password,
        },
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="form-container-wrap">
        <div className="form-container">
          <div className="form-fheading">Shoppo</div>
          <div className="form-sheading">Join Our Community</div>
          <div className="form-theading">
            Join now and Start Buying and Selling with Ease!
          </div>
          <div className="form-content">
            <form onSubmit={onSubmit}>
              <div className="form-field-wrap50">
                <div className="form-field">
                  <div className="heading">First Name</div>
                  <input
                    type="text"
                    placeholder="First Name..."
                    value={data.first_name}
                    onChange={handleChange}
                    autoComplete="off"
                    name="first_name"
                    required
                  />
                </div>
                <div className="form-field">
                  <div className="heading">Last Name</div>
                  <input
                    type="text"
                    placeholder="Last Name..."
                    value={data.last_name}
                    onChange={handleChange}
                    autoComplete="off"
                    name="last_name"
                    required
                  />
                </div>
                <div className="form-field">
                  <div className="heading">Username</div>
                  <input
                    type="text"
                    placeholder="Username..."
                    value={data.username}
                    onChange={handleChange}
                    name="username"
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-field">
                  <div className="heading">
                    Phone <span>(optional)</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Phone..."
                    value={data.phone}
                    onChange={handleChange}
                    autoComplete="off"
                    name="phone"
                  />
                </div>
              </div>

              <div className="form-field100 form-field ">
                <div className="heading">Email</div>
                <input
                  type="text"
                  placeholder="Email..."
                  value={data.email}
                  onChange={handleChange}
                  autoComplete="off"
                  name="email"
                  required
                />
              </div>

              <div className="form-field-wrap50">
                <div className="form-field">
                  <div className="heading">Password</div>
                  <input
                    type={type}
                    placeholder="Password..."
                    value={data.password}
                    onChange={handleChange}
                    autoComplete="off"
                    name="password"
                    required
                  />
                  <i className="bi bi-eye eye" onClick={toggleType}></i>
                </div>
                <div className="form-field">
                  <div className="heading">Confirm Password</div>
                  <input
                    type={type}
                    placeholder="Password..."
                    value={data.confirm_password}
                    onChange={handleChange}
                    name="confirm_password"
                    autoComplete="off"
                    required
                  />
                  <i className="bi bi-eye eye" onClick={toggleType}></i>
                </div>
              </div>

              <span className="securepass">
                Secure Your Account with a Strong Password
              </span>

              <div className="agreement">
                <label htmlFor="agree">
                  <input type="checkbox" name="agree" id="agree" />
                  <span className="checkmark"></span> I agree with
                  <Link to="/terms-of-service" className="colored">
                    terms of service
                  </Link>
                  and
                  <Link to="/privacy-policy" className="colored">
                    privacy policy.
                  </Link>
                </label>
              </div>
              <div className="form-field">
                <button>Signup</button>
              </div>

              <div className="form-link">
                Already have account?
                <Link to="/signin">Signin</Link>
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

export default Signup;
