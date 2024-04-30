import React from "react";

const ListVertical = () => {
  return (
    <div className="container-list">
      <ul>
        <li>
          <p className="title">Informes</p>
        </li>
        <li>
          <p className="items-list">Proveedores</p>
        </li>
        <li>
          <p className="items-list">Proponentes por Proceso</p>
        </li>
        <li>
          <p className="items-list">Contratos cancelados</p>
        </li>
      </ul>
    </div>
  );
};

export default ListVertical;
