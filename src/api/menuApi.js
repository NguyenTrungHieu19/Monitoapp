import AxiosClient from "./api";
const GetAll = (config) =>{
    return AxiosClient.get("menu/getall", config)
}
const GetById = (id, config)=>{
    return AxiosClient.get(`/menu/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/menu", data, config);
  };
  const Update = (id, data, config) => {
    return AxiosClient.put(`/menu/${id}`, data, config);
  };
  const Delete = (id, config) => {
    return AxiosClient.delete(`/menu/${id}`, config);
  };
const MenuApis = {GetAll,GetById,Create,Update,Delete};

export default MenuApis