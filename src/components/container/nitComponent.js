import React, { useRef, useState } from "react";
import { getNit } from "../../utils/api";

const NitComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef(null);

  const handleSearch = async () => {
    const value = searchRef.current.value;
    if (value) {
      setLoading(true);
      const result = await getNit(value);
      setLoading(false);
      setData(result);
    }
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
            {!loading ? (
              data &&
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
              })
            ) : (
              <tr>
                <td colSpan="5">Cargando...</td>
              </tr>
            )}
          </tbody>
        </table>
      </li>
    </ul>
  );
};

export default NitComponent;
