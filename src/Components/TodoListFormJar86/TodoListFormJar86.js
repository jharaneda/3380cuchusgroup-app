import React from "react";
import { addTodo } from "../ServicesJar86/starflowServicesJar86";

const TodoListFormJar86 = (props) => {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-3 form-floating mb-3">
          <input
            id="expiration_date"
            type="date"
            className="form-control"
            placeholder="Expiration Date"
            value={props.todoState.expiration_date}
            onChange={props.update}
          />
          <label className="form-label" htmlFor="floatingInput">
            Expiration date
          </label>
        </div>
        <div className="col-md-2 form-floating mb-3">
          <input
            id="room_number"
            type="text"
            className="form-control"
            placeholder="200"
            value={props.todoState.room_number}
            onChange={props.update}
          />
          <label className="form-label" htmlFor="floatingInput">
            Room involve
          </label>
        </div>
        <div className="col-md-3 form-floating mb-3">
          <select id="priority" className="form-select" onChange={props.update}>
            <option selected>Choose priority</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <label htmlFor="floatingSelect" className="form-label" value={props.todoState.priority}>
            Priority
          </label>
        </div>
        <div className="col-md-8 form-floating mb-3">
          <textarea
            id="comments"
            className="form-control"
            placeholder="Comments"
            style={{ height: "100px" }}
            value={props.todoState.comments}
            onChange={props.update}
          ></textarea>
          <label htmlFor="floatingTextarea" className="form-label">
            Comments
          </label>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={props.addAction}>
            Save todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoListFormJar86;
