import React, { useState } from "react";
import { downloadFile, handleFloatEvent, handleSmallMenu } from "./Functional";
import FloatForm from "./FloatForm";

const Dashboard = () => {
  const [smallMenuText, setSmallMenuText] = useState<string>("All");

  const menuSelect = (id: number) => {
    const menuItems = document.querySelectorAll(".dd-row"),
      menu = document.querySelector(".dd-menu");
    for (let i = 1; i <= menuItems.length; i++) {
      setSmallMenuText(menuItems[id - 1].innerHTML);
    }
    menu?.classList.remove("toggle");
  };

  return (
    <>
      <FloatForm />
      <div className="dashboard-container">
        <div className="main-heading1">Admin Dashboard</div>
        <div className="main-heading2">
          <div className="header">Events</div>
          <div className="heading-button-wrap">
            <button className="export" onClick={downloadFile}>
              Export CSV
            </button>
            <button className="add-event" onClick={handleFloatEvent}>
              + Add Event
            </button>
          </div>
        </div>
        <div className="dropdown-wrap">
          <div className="dropdown">
            <div className="show-dd-value" onClick={handleSmallMenu}>
              <span>Code Type : {smallMenuText}</span>
              <i className="bi bi-chevron-down"></i>
            </div>
            <div className="dd-menu">
              <div className="dd-row" onClick={() => menuSelect(1)}>
                All
              </div>
              <div className="dd-row" onClick={() => menuSelect(2)}>
                Type 1
              </div>
              <div className="dd-row" onClick={() => menuSelect(3)}>
                Type 2
              </div>
              <div className="dd-row" onClick={() => menuSelect(4)}>
                Type 3
              </div>
            </div>
          </div>
        </div>
        <div className="datas">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Code Type</th>
                <th>On Sale Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Singing</td>
                <td>Type 1</td>
                <td>22/10/2023</td>
                <td>
                  <button className="actionBtn done">Done</button>
                  <button className="actionBtn">Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
