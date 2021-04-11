import React from "react";
import { Link } from "react-router-dom";

const HealthFormJar86 = ({
  tenants,
  viewProfile,
  updateCheck,
  healthChecks,
  onClick,
  healthList
}) => {
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
            <select
              id="night"
              name="night"
              value={tenant.healthChecks[0].night}
              className="form-select"
              onChange={(e) => updateCheck(e, tenant.room, tenant._id)}
              onClick={(e) => onClick()}
            >
              <option>Not seen</option>
              <option>Seen</option>
              <option>Call in</option>
              <option>MPR</option>
            </select>
          </td>
          <td>
          <select
              id="morning"
              name="morning"
              className="form-select"
              value={tenant.healthChecks[0].morning}
              onChange={(e) => updateCheck(e, tenant.room, tenant._id)}
              onClick={(e) => onClick()}
            >
              <option>Not seen</option>
              <option>Seen</option>
              <option>Call in</option>
              <option>MPR</option>
            </select>
          </td>
          <td>
          <select
              id="evening"
              name="evening"
              className="form-select"
              value={tenant.healthChecks[0].evening}
              onChange={(e) => updateCheck(e, tenant.room, tenant._id)}
              onClick={(e) => onClick()}
            >
              <option>Not seen</option>
              <option>Seen</option>
              <option>Call in</option>
              <option>MPR</option>
            </select>
          </td>
          <td>
            <button
              id={tenant._id}
              className="btn btn-danger"
              onClick={(e) => viewProfile(e, tenant._id)}
            >
              <Link to="/profile" role="button" className="btn btn-danger">
                View Profile
              </Link>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default HealthFormJar86;
