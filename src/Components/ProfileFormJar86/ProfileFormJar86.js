import React from "react";
import profileImage from "../Images/profile.png";

const ProfileFormJar86 = ({ curreTenant, update }) => {
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
          <select id="floor" className="form-select" onChange={update} value={curreTenant.floor}>
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
        {/* <div className="col-md-3 form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="email@email.com"
            onChange={update}
          />
          <label className="form-label" htmlFor="floatingInput">
            E-mail
          </label>
        </div> */}
        <div className="col-md-3 form-floating mb-3">
          <input
            id="birthdate"
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
            id="phsycal_description"
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
          <button type="submit" className="btn btn-primary">
            Save Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileFormJar86;
