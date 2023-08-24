import axios from "axios";
const AxiosClient = axios.create({
  baseURL: "http://localhost:52379/api",
});
AxiosClient.interceptors.response.use((response) => {
    if (response.status === 200) ;
    return response;
  });
export default AxiosClient;