import React from "react";

const ListVertical = ({ selectComponent }) => {
  return (
    <div className="container-list">
      <ul>
        <li>
          <p className="title">Informes</p>
        </li>
        <li>
          <p className="items-list" onClick={() => selectComponent(1)}>
            Proveedores
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ListVertical;
