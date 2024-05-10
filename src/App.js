import React from "react";
import ContainerResult from "./components/ContainerResult.js";
import ListVertical from "./components/ListVertical.js";
import "./styles/App.css";

function App() {
  return (
    <div className="container">
      <ListVertical />
      <ContainerResult />
    </div>
  );
}

export default App;
