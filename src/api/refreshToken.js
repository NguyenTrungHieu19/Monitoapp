import AxiosClient from "./api";
const PostToken = (config) =>{
    return AxiosClient.post("/User/RenewToken", config)
}
const RefreshToken = {PostToken,};

export default RefreshToken;