import React from "react";

const ContainerResult = () => {
  return (
    <div className="container-result">
      <ul>
        <li>
          <span className="title">Busquedá</span>
          <input
            type="text"
            class="search-input"
            placeholder="Ingrese Nit o Departamento"
          />
        </li>
        <li>
          <table>
            <thead>
              <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
                <th>Columna 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Información 1</td>
                <td>Información 2</td>
                <td>Información 3</td>
                <td>Información 4</td>
              </tr>
              <tr>
                <td>Información 5</td>
                <td>Información 6</td>
                <td>Información 7</td>
                <td>Información 8</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4">
                  Información del usuario: UsuarioX, Correo:
                  usuariox@example.com, Teléfono: 123-456-7890
                </td>
              </tr>
            </tfoot>
          </table>
        </li>
      </ul>
    </div>
  );
};

export default ContainerResult;
