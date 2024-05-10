import React, { useRef, useState } from "react";
import { getNit } from "../../utils/api";

const NitComponent = () => {
  const [data, setData] = useState([]);
  const searchRef = useRef(null);

  const handleSearch = async () => {
    const value = searchRef.current.value;
    const result = await getNit(value);
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
          placeholder="Ingrese el nit"
        />
        <label className="btn-search" onClick={() => handleSearch()}>
          Buscar
        </label>
      </li>
      <li>
        <table>
          <tbody className="scrollable-tbody">
            <tr>
              <th>Nombre</th>
              <th>Municipio</th>
              <th>Departamento</th>
              <th>Tipo empresa</th>
              <th>Nombre representante legal</th>
            </tr>
            {data &&
              data.length > 0 &&
              data.map((item, index) => {
                let {
                  nombre,
                  municipio,
                  departamento,
                  tipo_empresa,
                  nombre_representante_legal,
                } = item;
                return (
                  <tr key={index}>
                    <td>{nombre}</td>
                    <td>{municipio}</td>
                    <td>{departamento}</td>
                    <td>{tipo_empresa}</td>
                    <td>{nombre_representante_legal}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </li>
    </ul>
  );
};

export default NitComponent;
