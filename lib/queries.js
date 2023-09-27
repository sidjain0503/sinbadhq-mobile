// api/queries.js
import apiClient from './apiclient';
import { API_ENDPOINTS } from './endpoints';


export const getallpackage = async () => {

  const response = await apiClient.get(API_ENDPOINTS.PACKAGE);

  return response.data;

};


export const getallkyclinks = async (id) => {

  const response = await apiClient.get(`/products/${id}/kyc`);

  return response.data;

};
