import AxiosClient from "./api";
const GetAll = (config) =>{
    return AxiosClient.get("/ContentHeader/getall", config)
}
const GetById = (id, config)=>{
    return AxiosClient.get(`/ContentHeader/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/ContentHeader", data, config);
  };
  const Update = (id, data, config) => {
    return AxiosClient.put(`/ContentHeader/${id}`, data, config);
  };
  const Delete = (id, config) => {
    return AxiosClient.delete(`/ContentHeader/${id}`, config);
  };
const BannerHeaderApi = {GetAll,GetById,Create,Update,Delete};

export default BannerHeaderApi