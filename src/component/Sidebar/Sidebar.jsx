import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="w-25 shadow p-3 me-1 mb-5 bg-body rounded">
      <ul className="list-unstyled bg-dark mt-1 ms-auto text-white-50 text-center rounded-2 ">
        <li className="border-bottom mb-1 p-2 border-white">Home</li>
        <li className="border-bottom mb-1 p-2 border-white">About</li>
        <li className="border-bottom mb-1 p-2 border-white">Contact</li>
        <li className="border-bottom mb-1 p-2 border-white">Blog</li>
        <li className="border-bottom mb-1 p-2 border-white">Hello Amer</li>
      </ul>
    </div>
  );
};

export default Sidebar;
