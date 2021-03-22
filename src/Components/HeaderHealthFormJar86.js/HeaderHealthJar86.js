import React from "react";
import HealthFormJar86 from "../HealthFormJar86/HealthFormJar86";

const HeaderHealthJar86 = ({ tenants, viewProfile }) => {
  return (
    <form className="checkForm">
      <h1>Health and Wellness Report</h1>
      <table className="table">
        <thead>
          <tr>
            <td>Fecha de hoy</td>
          </tr>
          <tr>
            <th>
              <input type="text" placeholder="Search here..."></input>
            </th>
          </tr>
          <tr>
            <th className="col-1">Room</th>
            <th className="col-1">Name</th>
            <th className="col-1">Birth Date</th>
            <th className="col-1">Morning</th>
            <th className="col-1">Evening</th>
            <th className="col-1">Night</th>
            <th className="col-1">View Profile</th>
          </tr>
        </thead>
        <HealthFormJar86 tenants={tenants} viewProfile={viewProfile} />
      </table>
    </form>
  );
};

export default HeaderHealthJar86;
