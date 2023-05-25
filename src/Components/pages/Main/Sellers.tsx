import React, { useState } from "react";
import { handleSmallMenu } from "./Functional";

const Sellers = () => {
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
      <div className="dashboard-container">
        <div className="main-heading1">Sellers</div>
        <div className="main-heading2">
          <div className="header">Sellers</div>
          <div className="heading-button-wrap">
            <button className="export">Export CSV</button>
            <button className="add-event">+ Add Event</button>
          </div>
        </div>
        <div className="dropdown-wrap">
          <div className="dropdown">
            <div className="show-dd-value" onClick={handleSmallMenu}>
              <span>Status : {smallMenuText}</span>
              <i className="bi bi-chevron-down"></i>
            </div>
            <div className="dd-menu">
              <div className="dd-row" onClick={() => menuSelect(1)}>
                All
              </div>
              <div className="dd-row" onClick={() => menuSelect(2)}>
                Active
              </div>
              <div className="dd-row" onClick={() => menuSelect(3)}>
                Not Approved
              </div>
              <div className="dd-row" onClick={() => menuSelect(4)}>
                Banned
              </div>
            </div>
          </div>
        </div>
        <div className="datas">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Quantity Sold</th>
                <th>Total Sale</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Meet</td>
                <td>meet@gmail.com</td>
                <td>42</td>
                <td>55</td>
                <td>Active</td>
                <td>
                  <button className="actionBtn">Ban Seller</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Sellers;
