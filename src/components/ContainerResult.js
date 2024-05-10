import React from "react";
import DepartComponent from "./container/departComponent";
import NitComponent from "./container/nitComponent";

const ContainerResult = () => {
  return (
    <div className="container-result">
      <p>Datos Abiertos - SECOP</p>
      <DepartComponent />
      <NitComponent />
    </div>
  );
};

export default ContainerResult;
