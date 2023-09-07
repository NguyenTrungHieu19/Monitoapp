import axios from "axios";
import RefreshToken from "./refreshToken";
const AxiosClient = axios.create({
  baseURL: "http://localhost:52379/api",
});

AxiosClient.interceptors.response.use((response) => {
  if (response.status === 200);
  return response;}
);
AxiosClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
AxiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;   
      try { 
        const accessTokenRefr = localStorage.getItem('accessToken')
        const refreshTokenRefr = localStorage.getItem('refreshToken');
        const response = await RefreshToken.PostToken({accessToken:accessTokenRefr,refreshToken:refreshTokenRefr});
        const { accessToken,refreshToken } = response.data.token;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {
      }
    }

    return Promise.reject(error);
  }
);
export default AxiosClient;