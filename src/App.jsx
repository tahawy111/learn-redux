import React from "react";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-between">
        <Sidebar />
        <Form />
      </div>
    </div>
  );
};

export default App;
