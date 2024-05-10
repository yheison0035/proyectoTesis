import React from "react";
import ContainerResult from "./components/containerResult";
import ListVertical from "./components/listVertical";
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
