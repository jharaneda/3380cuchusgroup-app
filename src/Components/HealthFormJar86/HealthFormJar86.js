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
            {/* <Link to='/profile'> */}
            <button id={tenant.room} className="btn btn-danger" onClick={(e) => viewProfile(e, tenant.room)}><Link to='/profile' role='button' className='btn btn-danger'>View Profile</Link></button>
            {/* </Link> */}
          </td>
          
        </tr>
      ))}
    </tbody>
  );
};

export default HealthFormJar86;
