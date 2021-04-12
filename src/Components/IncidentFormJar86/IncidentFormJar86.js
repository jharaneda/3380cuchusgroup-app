import React from "react";
import IncidentListJar86 from "../IncidentListJar86/IncidentListJar86";

const IncidentFormJar86 = ({ update, incidents, sendEmail, addAction }) => {
  return (
    <div>
      <div className="row border-dark border rounded float-start">
        <div className="container col-sm-12 col-md-12 border-danger rounded">
          <h1 className="display-6">Incident Report</h1>
          <table className="table">
            <tbody>
              <tr>
                <td className="col-md-3 form-floating mb-3">
                  <input
                    id="incident_date"
                    name="incident_date"
                    type="date"
                    className="form-control"
                    placeholder="Incident Date"
                    onChange={(e) => update(e)}
                  />
                  <label className="form-label" htmlFor="floatingInput">
                    Incident Date
                  </label>
                </td>
                <td className="col-md-3 form-floating mb-3">
                  <input
                    id="incident_time"
                    name="incident_time"
                    type="time"
                    className="form-control"
                    placeholder="Incident Time"
                    onChange={update}
                  />
                  <label htmlFor="floatingInput" className="form-label">
                    Incident Time
                  </label>
                </td>
                <td className="col-md-3 form-floating mb-3">
                  <select
                    id="type_incident"
                    name="type_incident"
                    className="form-select"
                    onChange={update}
                  >
                    <option selected>Choose type...</option>
                    <option>Missing Persons Report</option>
                    <option>Ambulance request by Resident</option>
                    <option>Medical concern (not OD-related)</option>
                    <option>Self-harm concern/ Feeling Suicidal</option>
                    <option>Police called (non-critical)</option>
                    <option>Allegation of Abuse/Mistreatment</option>
                    <option>Allegation of theft</option>
                    <option>Allegation of vandalism</option>
                    <option>(type out if "other")</option>
                  </select>
                  <label htmlFor="floatingSelect" className="form-label">
                    Type of Incident
                  </label>
                </td>
                <td className="col-md-3 form-floating mb-3">
                  <input
                    id="staff_name"
                    name="staff_name"
                    type="text"
                    className="form-control"
                    placeholder="John Smith"
                    onChange={update}
                  />
                  <label className="form-label" htmlFor="floatingInput">
                    Staff Name
                  </label>
                </td>
              </tr>
              <tr>
              <td className="col-md-2 form-floating mb-2">
                  <select
                    id="VPD_called"
                    name="VPD_called"
                    className="form-select form-floating"
                    onChange={update}
                  >
                    <option>Yes</option>
                    <option selected>No</option>
                  </select>
                  <label htmlFor="floatingSelect" className="form-label">911 Called?</label>
                </td>
                <td className="col-md-2 form-floating mb-2">
                  <input
                    id="room"
                    name="room"
                    type="text"
                    className="form-control"
                    placeholder="200"
                    onChange={update}
                  />
                  <label className="form-label" htmlFor="floatingInput">
                    Room number
                  </label>
                </td>
                <td className="form-floating" colSpan="3">
                  <textarea
                    id="comments"
                    name="comments"
                    className="form-control"
                    placeholder="Your comments..."
                    style={{ height: "150px" }}
                    onChange={update}
                  ></textarea>
                  <label htmlFor="floatingTextarea" className="form-label ">
                    Comments
                  </label>
                </td>
              </tr>
              <tr>
                <td className="col-md-3 form-floating mb-3" colSpan="5">
                  <button className="btn btn-primary" onClick={(e) => addAction(e)}>
                    Save Information
                  </button>
                </td>
              </tr>
              <tr>
              <td className="col-md-3 form-floating mb-3" colSpan="5">
                  <button type="submit" className="btn btn-primary" onClick={(e) => sendEmail(e)} value='send'>Save & Send by email</button>
                </td>
              </tr>
            </tbody>
          </table>
          <IncidentListJar86 incidents={incidents} />
        </div>
      </div>
    </div>
  );
};

export default IncidentFormJar86;
