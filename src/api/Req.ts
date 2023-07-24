import { Api } from "./Api";
export const VehiclesApi = async (page: number) => {
  const response = await Api.get(`/?page=${page}`);
  return response.data;
};

export const VehiclesURL = async (url: string) => {
  const response = await Api.get(url);
  return response.data;
};
export const Cep = async (cep: string) => {
  const response = await Api.get(`https://viacep.com.br/ws/${cep}/json/`);
  return response.data;
};
