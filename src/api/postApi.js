import AxiosClient from "./api";
const GetAll = (config) =>{
    return AxiosClient.get("post/getbyhome?TopPost=3", config)
}
const GetById = (id, config)=>{
    return AxiosClient.get(`/post/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/post", data, config);
  };
  const Update = (id, data, config) => {
    return AxiosClient.put(`/post/${id}`, data, config);
  };
  const Delete = (id, config) => {
    return AxiosClient.delete(`/post/${id}`, config);
  };
const PostApis = {GetAll,GetById,Create,Update,Delete};

export default PostApis