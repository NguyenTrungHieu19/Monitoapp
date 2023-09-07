import AxiosClient from "./api";
const PostApi = (config) =>{
    return AxiosClient.post("/User/Login", config)
}
const LoginApi = {PostApi,};

export default LoginApi;