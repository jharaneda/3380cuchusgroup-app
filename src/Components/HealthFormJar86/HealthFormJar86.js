import React from "react";
import { Link } from "react-router-dom";

const HealthFormJar86 = ({ tenants, viewProfile, updateCheck, healthChecks }) => {
  return (
    <tbody>
      {tenants.map((tenant, key) => (
        <tr key={key} className="table">
          <td>{tenant.room}</td>
          <td>
            {tenant.first_name} {tenant.last_name}
          </td>
          <td>{tenant.birthdate}</td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              // value={healthChecks.morningCheck}
              id="morning_check"
              onChange={(e) => updateCheck(e, tenant.room)}
            />
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              // value={healthChecks[0].eveningCheck}
              id="evening_check"
              onChange={updateCheck}
            />
          </td>
          <td>
            <input
              className="form-check-input"
              type="checkbox"
              // value={healthChecks[0].nightCheck}
              id="night_check"
              onChange={updateCheck}
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
