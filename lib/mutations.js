// api/mutations.js
import { useMutation } from "react-query";
import apiClient from "./apiclient";
import { API_ENDPOINTS } from "./endpoints";
import axios from "axios";

export const loginUser = async () => {
  const axiosInstance = axios.create();

  const loginData = {
    email:"devsgolang@gmail.com",
    password:"@admin123",
  };

  const response = await axiosInstance.post(
    `https://lztrjqsdiqyagurevgov.supabase.co/auth/v1/token?grant_type=password`,
    loginData,
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dHJqcXNkaXF5YWd1cmV2Z292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUyODI4OTcsImV4cCI6MjAxMDg1ODg5N30.KgKYJC6CfGJXZOfS_eTa-GhZaBpxoygZy3Ld7ByQKtw",
      },
    }
  );

  if (response.data) {
    const token = response.data.access_token;
    localStorage.setItem("access_token", token);
    apiClient.defaults.headers.common["Authorization"] = token;

    console.log(apiClient.defaults.headers.common['Authorization'])
  }
  return response.data;
};

export const createpackage = async (userData) => {
  const response = await apiClient.post(API_ENDPOINTS.PACKAGE, userData);

  return response.data;
};

export const createkyclink = async ({ userData, id }) => {
  const response = await apiClient.post(
    `${API_ENDPOINTS.PACKAGE}/${id}/kyc`,
    userData
  );

  return response.data;
};
