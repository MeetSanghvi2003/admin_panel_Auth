import React from "react";

const UserAnswers = () => {
  return (
    <>
      <div className="dashboard-container">
        <div className="main-heading1">Users Info</div>
        <div className="main-heading2">
          <div className="header">Answers</div>
          <div className="heading-button-wrap user-ans">
            <button className="export">Export CSV</button>
          </div>
        </div>
        <div className="datas">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Broker Experience</th>
                <th>Source of Referral</th>
                <th>Refer By</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>meet@gmail.com</td>
                <td>20+</td>
                <td>Through a friend who recommended your services</td>
                <td>N/A</td>
                <td>
                  <button className="actionBtn">X</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserAnswers;
