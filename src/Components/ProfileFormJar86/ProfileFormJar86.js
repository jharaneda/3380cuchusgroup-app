import React from "react";
import profileImage from "../Images/profile.png";

const ProfileFormJar86 = () => {
  return (
    <div>
      <form className="row g-3">
        <div className='row'>
            <div className='col'></div>
          <div className="col-md-3">
            <img
              src={profileImage}
              style={{ width: "150px", height: "150px" }}
              alt='profile'
            ></img>
            <label className="form-label">Tenant Name</label>
          </div>
          <div className='col'></div>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input type="text" className="form-control" placeholder="Name" />
          <label className="form-label" htmlFor="floatingInput">
            Name
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input type="text" className="form-control" placeholder="Last Name" />
          <label htmlFor="floatingInput" className="form-label">
            Last Name
          </label>
        </div>
        <div className="col-md-2 form-floating mb-3">
          <input type="text" className="form-control" placeholder="200" />
          <label
            className="form-label"
            htmlFor="floatingInput"
          >
            Room
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <select id="inputState" className="form-select">
            <option >Choose Floor</option>
            <option>Second (2nd)</option>
            <option>Third (3rd)</option>
            <option>Fourth (4th)</option>
            <option>Fifth (5th)</option>
            <option>Sixth (6th)</option>
            <option>Seventh (7th)</option>
          </select>
          <label htmlFor='floatingSelect' className="form-label">
            Floor
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="604-899-4520"
          />
          <label className="form-label" htmlFor='floatingInput'>Phone number</label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="email@email.com"
          />
          <label className="form-label" htmlFor='floatingInput'>E-mail</label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Birth-Date"
          />
          <label className="form-label" htmlFor='floatingInput'>Birth-Date</label>
        </div>
        
        <div className="col-md-10 form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="What meds are being given?"
            style={{height: '100px'}}
          ></textarea>
          <label htmlFor='floatingTextarea' className="form-label">
            Meds taken
          </label>
        </div>
        <div className="col-md-10 form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Your comments..."
            style={{height: '100px'}}
          ></textarea>
          <label htmlFor='floatingTextarea' className="form-label " >
            Comments
          </label>
        </div>
        <div className="col-md-10 form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Physical description..."
            style={{height: '100px'}}
          ></textarea>
          <label htmlFor='floatingTextarea' className="form-label " >
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
