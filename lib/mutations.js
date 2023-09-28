// api/mutations.js
import { useMutation } from "react-query";
import apiClient from "./apiclient";
import { API_ENDPOINTS } from "./endpoints";
import axios from "axios";

export const createkyclink = async ({ userData, id }) => {
  const response = await apiClient.post(
    `${API_ENDPOINTS.PACKAGE}/${id}/kyc`,
    userData
  );

  return response.data;
};
