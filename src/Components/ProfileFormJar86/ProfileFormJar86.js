import React from "react";
import profileImage from "../Images/profile.png";
import IncidentsByProfile from "../IncidentsByProfile/IncidentsByProfile";

const ProfileFormJar86 = ({ curreTenant, update, profileInputs, activateProfile, saveAction, incidentsByProfile }) => {
  return (
    <div className="row border-dark border rounded float-start">
      <form className="row g-3">
        <div className="row">
          <div className="col"></div>
          <div className="col-md-3">
            <img
              src={profileImage}
              style={{ width: "150px", height: "150px" }}
              alt="profile"
            ></img>
            
          </div>
          <div className="col"></div>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            id="first_name"
            disabled={profileInputs.name}
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={update}
            value={curreTenant.first_name}
          />
          <label className="form-label" htmlFor="floatingInput">
            Name
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            id="last_name"
            disabled={profileInputs.lastName}
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={update}
            value={curreTenant.last_name}
          />
          <label htmlFor="floatingInput" className="form-label">
            Last Name
          </label>
        </div>
        <div className="col-md-2 form-floating mb-3">
          <input
            id="room"
            disabled={profileInputs.room}
            type="text"
            className="form-control"
            placeholder="200"
            onChange={update}
            value={curreTenant.room}
          />
          <label className="form-label" htmlFor="floatingInput">
            Room
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <select id="floor" className="form-select" onChange={update} value={curreTenant.floor} disabled={profileInputs.floor}>
            <option>Choose floor</option>
            <option>Second floor</option>
            <option>Third floor</option>
            <option>Fourth floor</option>
            <option>Fifth floor</option>
            <option>Sixth floor</option>
            <option>Seventh floor</option>
          </select>
          <label htmlFor="floatingSelect" className="form-label">
            Floor
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            id="phone"
            disabled={profileInputs.phoneNumber}
            type="text"
            className="form-control"
            placeholder="604-899-4520"
            onChange={update}
            value={curreTenant.phone}
          />
          <label className="form-label" htmlFor="floatingInput">
            Phone number
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            id="birthdate"
            disabled={profileInputs.birthdate}
            type="date"
            className="form-control"
            placeholder="Birth-Date"
            onChange={update}
            value={curreTenant.birthdate}
          />
          <label className="form-label" htmlFor="floatingInput">
            Birth-Date
          </label>
        </div>

        <div className="col-md-10 form-floating mb-3">
          <textarea
            id="meds_taken"
            disabled={profileInputs.meds}
            className="form-control"
            placeholder="What meds are being given?"
            style={{ height: "100px" }}
            onChange={update}
            value={curreTenant.meds_taken}
          ></textarea>
          <label htmlFor="floatingTextarea" className="form-label">
            Meds taken
          </label>
        </div>
        <div className="col-md-10 form-floating mb-3">
          <textarea
            id="comments"
            disabled={profileInputs.comments}
            className="form-control"
            placeholder="Your comments..."
            style={{ height: "100px" }}
            onChange={update}
            value={curreTenant.comments}
          ></textarea>
          <label htmlFor="floatingTextarea" className="form-label ">
            Comments
          </label>
        </div>
        <div className="col-md-10 form-floating mb-3">
          <textarea
            id="physical_description"
            disabled={profileInputs.description}
            className="form-control"
            placeholder="Physical description..."
            style={{ height: "100px" }}
            onChange={update}
            value={curreTenant.phsycal_description}
          ></textarea>
          <label htmlFor="floatingTextarea" className="form-label ">
            Physical description
          </label>
        </div>
        <div className="col-12">
          {(profileInputs.description === true) ? <button className="btn btn-primary" onClick={(e) => activateProfile(e)}>
            Edit Information
          </button> : <button className='btn btn-primary' onClick={saveAction}>Save Information</button>}
        </div>
      </form>
      <IncidentsByProfile incidentsByProfile={incidentsByProfile}/>
    </div>
  );
};

export default ProfileFormJar86;
