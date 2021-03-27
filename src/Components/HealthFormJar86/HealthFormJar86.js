import React from "react";
import { Link } from "react-router-dom";

const HealthFormJar86 = ({ tenants, viewProfile }) => {
  return (
    <tbody>
      {tenants.map((tenant, key) => (
        <tr key={key} className="table">
          <td>{tenant.room}</td>
          <td>
            {tenant.first_name} {tenant.last_name}
          </td>
          <td>{tenant.birthdate}</td>
          {/* <tr> */}
          {/* <td>room</td>
            <td>name</td>
            <td>birthdate</td> */}
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="morning_check"
            />
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="evening_check"
            />
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="night_check"
            />
          </td>
          <td>
            <button className="btn btn-danger">View Profile</button>
          </td>
          {/* onClick={(e) => viewProfile(tenant.room)} */}
        </tr>
      ))}
    </tbody>
  );
};

export default HealthFormJar86;
