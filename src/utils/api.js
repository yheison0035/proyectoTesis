import axios from "axios";

export const getDepartament = async (depart) => {
  try {
    const response = await axios.get(
      `https://proyectogradotesis.azurewebsites.net/api/data/departamento/${depart}`
    );
    return response.data.departamentoResponseDto;
  } catch (error) {
    console.log(error);
  }
};

export const getNit = async (nit) => {
  try {
    const response = await axios.get(
      `https://proyectogradotesis.azurewebsites.net/api/data/nit/${nit}`
    );
    return response.data.nitResponseDtos;
  } catch (error) {
    console.log(error);
  }
};
