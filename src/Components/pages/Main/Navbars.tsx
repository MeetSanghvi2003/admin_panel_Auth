import React, { FC } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { handleMainMenu } from "./Functional";

const Navbars: FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setTimeout(() => {
      navigate("/login");
    });
  };

  return (
    <>
      {/* Topbar Started */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-greetings">Good Morning !</div>
          <div className="topbar-action">
            <Link to="/notifications">
              <i className="bi bi-bell icon"></i>
            </Link>
            <Link to="/profile">
              <i className="bi bi-person icon "></i>
            </Link>
            <div className="listIcon" onClick={handleMainMenu}></div>
          </div>
        </div>
      </div>

      {/* Sidebar Started */}
      <div className="sidebar">
        <div className="sidebar-logo">SHOPP</div>
        <NavLink to="/">
          <i className="bi bi-columns-gap"></i>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/sellers">
          <i className="bi bi-shop"></i>
          <span>Sellers</span>
        </NavLink>
        <NavLink to="/buyers">
          <i className="bi bi-cart"></i>
          <span>Buyers</span>
        </NavLink>
        <NavLink to="/users-answers">
          <i className="bi bi-person"></i>
          <span>User Answers</span>
        </NavLink>
        <NavLink to="/notifications">
          <i className="bi bi-bell"></i>
          <span>Notifications</span>
        </NavLink>
        <button onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </button>
      </div>
    </>
  );
};

export default Navbars;
