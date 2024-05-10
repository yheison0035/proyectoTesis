import React, { useRef, useState } from "react";
import { getDepartament } from "../../utils/api";

const DepartComponent = () => {
  const [data, setData] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = async () => {
    const value = searchRef.current.value;
    const result = await getDepartament(value);
    setData(result);
  };

  return (
    <ul>
      <li>
        <span className="title">Busquedá</span>
        <input
          ref={searchRef}
          type="text"
          className="search-input"
          placeholder="Ingrese el departamento"
        />
        <label className="btn-search" onClick={() => handleSearch()}>
          Buscar
        </label>
      </li>
      <li>
        <table>
          <tbody className="scrollable-tbody">
            <tr>
              <th>Código</th>
              <th>Municipio</th>
              <th>Nombre</th>
            </tr>
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                let { codigo, municipio, nombre } = item;
                return (
                  <tr key={index}>
                    <td>{codigo}</td>
                    <td>{municipio}</td>
                    <td>{nombre}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </li>
    </ul>
  );
};

export default DepartComponent;
