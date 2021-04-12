import React from "react";
import HealthFormJar86 from "../HealthFormJar86/HealthFormJar86";

const HeaderHealthJar86 = ({ tenants, viewProfile, update, updateCheck,healthChecks, date, onClick, healthList }) => {
  return (
    <form className="checkForm row border-dark border rounded float-start">
      
      <table className="table">
        <thead>
          <tr><td colSpan='5'><h1>Health and Wellness Report</h1></td></tr>
          <tr>
            <td colSpan='2'><h3>Today date: {date}</h3></td>
          </tr>
          <tr>
            <th colSpan='7'>
              <input id='searchBar' type="text" placeholder="Search here..." onChange={(e) => update(e)}></input>
            </th>
          </tr>
          <tr>
            <th className="col-1">Room</th>
            <th className="col-1">Name</th>
            <th className="col-1">Birth Date</th>
            <th className="col-1">Night</th>
            <th className="col-1">Morning</th>
            <th className="col-1">Evening</th>
            <th className="col-1">View Profile</th>
          </tr>
        </thead>
        <HealthFormJar86 tenants={tenants} viewProfile={viewProfile} updateCheck={updateCheck} healthChecks={healthChecks} onClick={onClick} healthList={healthList}/>
      </table>
    </form>
  );
};

export default HeaderHealthJar86;
