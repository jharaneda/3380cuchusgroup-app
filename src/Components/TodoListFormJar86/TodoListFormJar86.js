import React from "react";

const TodoListFormJar86 = () => {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-3 form-floating mb-3">
          <input type="date" className="form-control" placeholder="Expiration Date" />
          <label className="form-label" htmlFor="floatingInput">
            Expiration date
          </label>
        </div>
        <div className="col-md-2 form-floating mb-3">
          <input type="text" className="form-control" placeholder="200" />
          <label className="form-label" htmlFor="floatingInput">
            Room involve
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <select id="inputState" className="form-select">
            <option>Choose priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <label htmlFor="floatingSelect" className="form-label">
            Priority
          </label>
        </div>
        <div className="col-md-8 form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Comments"
            style={{ height: "100px" }}
          ></textarea>
          <label htmlFor="floatingTextarea" className="form-label">
            Comments
          </label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Save todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoListFormJar86;
