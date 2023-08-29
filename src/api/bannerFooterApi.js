import AxiosClient from "./api";
const GetAll = (config) =>{
    return AxiosClient.get("/bannerFooter/getAll", config)
}
const GetById = (id, config)=>{
    return AxiosClient.get(`/bannerFooter/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/bannerFooter", data, config);
  };
  const Update = (id, data, config) => {
    return AxiosClient.put(`/bannerFooter/${id}`, data, config);
  };
  const Delete = (id, config) => {
    return AxiosClient.delete(`/bannerFooter/${id}`, config);
  };
const BannerFooterApi = {GetAll,GetById,Create,Update,Delete};

export default BannerFooterApi