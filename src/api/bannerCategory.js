import AxiosClient from "./api";
const GetAll = (config) =>{
    return AxiosClient.get("/bannercategory/getall", config)
}
const GetById = (id, config)=>{
    return AxiosClient.get(`/bannercategory/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/bannercategory", data, config);
  };
  const Update = (id, data, config) => {
    return AxiosClient.put(`/bannercategory/${id}`, data, config);
  };
  const Delete = (id, config) => {
    return AxiosClient.delete(`/bannercategory/${id}`, config);
  };
const BannerCategoryApi = {GetAll,GetById,Create,Update,Delete};

export default BannerCategoryApi