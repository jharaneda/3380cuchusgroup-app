import React from "react";
import { Link } from "react-router-dom";

const HealthReportJar86 = ({ healthReport, viewProfile }) => {
  return (
    <table className="table">
      <thead>
        <tr><td><h1>Missing Person Report</h1></td></tr>
        <tr><td><h3>Tenants that haven't been seen the last 3 days</h3></td></tr>
        <tr>
          <th>Full Name</th>
          <th>Room</th>
          <th>Birthdate</th>
          <th>View Profile</th>
        </tr>
      </thead>
      <tbody>
        {healthReport.map((profile, key) => (
          <tr key={key}>
            <td>{profile.names}</td>
            <td>{profile.room}</td>
            <td>{profile.birthdate}</td>
            <td>
              <button
                id={profile._id}
                className="btn btn-danger"
                onClick={(e) => viewProfile(e, profile._id)}
              >
                <Link to="/profile" role="button" className="btn btn-danger">
                  View Profile
                </Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HealthReportJar86;
