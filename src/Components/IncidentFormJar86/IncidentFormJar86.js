import React from "react";

const IncidentFormJar86 = () => {
  return (
    <div>
      <div className="row border-dark border rounded float-start">
        <div className="container col-sm-12 col-md-12 border-danger rounded">
          <table className="table">
            <tbody>
              <tr>
                <td className="col-md-3 form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Incident Date"
                  />
                  <label className="form-label" htmlFor="floatingInput">
                    Incident Date
                  </label>
                </td>
                <td className="col-md-3 form-floating mb-3">
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Incident Time"
                  />
                  <label htmlFor="floatingInput" className="form-label">
                    Incident Time
                  </label>
                </td>
                <td className="col-md-3 form-floating mb-3">
                  <select id="inputState" className="form-select">
                    <option>Choose type...</option>
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
                    type="text"
                    className="form-control"
                    placeholder="John Smith"
                  />
                  <label className="form-label" htmlFor="floatingInput">
                    Staff Name
                  </label>
                </td>
                <td className="col-md-3 form-floating mb-3">
                  <input
                    className="form-check-input form-floating"
                    type="checkbox"
                    value=""
                    id="911_called"
                  />{" "}
                  911 Called?
                </td>
              </tr>
              <tr>
              <td className="col-md-3 form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="200"
                  />
                  <label className="form-label" htmlFor="floatingInput">
                    Room number
                  </label>
                </td>
                <td className="form-floating" colSpan='4'>
                  <textarea
                    className="form-control"
                    placeholder="Your comments..."
                    style={{ height: "100px" }}
                  ></textarea>
                  <label htmlFor="floatingTextarea" className="form-label ">
                    Comments
                  </label>
                </td>
              </tr>
              <tr>
                <td className="col-md-3 form-floating mb-3" colSpan='5'>
                  <button type="submit" className="btn btn-primary">
                    Save Information
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IncidentFormJar86;
