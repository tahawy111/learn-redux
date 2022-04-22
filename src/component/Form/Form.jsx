import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import "./Form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ name, email }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="shadow p-3 w-auto flex-1 mb-5 bg-body rounded"
    >
      <div className="mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <input type="submit" className="btn btn-primary w-100" />
      </div>
    </form>
  );
};

export default Form;
