import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://kyc-b6dd115716ab.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
    "Access-Control-Allow-Headers" :"*",
  },
  
});

// Function to set the bearer token
// const setBearerToken = (token) => {
//     apiClient.defaults.headers.common['Authorization'] = `eyJhbGciOiJIUzI1NiIsImtpZCI6InRHWUo2UVQ1TzhDaitQS1kiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjk1NjQxNDI5LCJpYXQiOjE2OTU2Mzc4MjksImlzcyI6Imh0dHBzOi8vbHp0cmpxc2RpcXlhZ3VyZXZnb3Yuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6IjI2OTNlZDY5LTJhMzAtNDI3ZC1hNThkLTU0ZmE4NWU3MTU2OCIsImVtYWlsIjoiZGV2c2dvbGFuZ0BnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTY5NTYzNzgyOX1dLCJzZXNzaW9uX2lkIjoiYTk2YmE4YmEtODM4ZS00NWUzLWFlNDQtMTUxYmMxYTdmYmQ0In0.Op3DwRh0j0AKJ8vBmEH4rywQKCInAHIqBMG2trlT1SQ`;
//   };

//   setBearerToken(); 

export default apiClient;


//https://lztrjqsdiqyagurevgov.supabase.co/auth/v1/token