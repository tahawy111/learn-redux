import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <form className="shadow p-3 w-auto flex-1 mb-5 bg-body rounded">
      <div className="mb-2">
        <label htmlFor="name"></label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email"></label>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Enter Name"
        />
      </div>
      <div className="mb-2">
        <input type="submit" className="btn btn-primary w-100" />
      </div>
    </form>
  );
};

export default Form;
