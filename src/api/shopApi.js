import AxiosClient from "./api";
const GetAll = (config) => {
  return AxiosClient.get("/information/getAll", config)
}
const GetById = (id, config) => {
  return AxiosClient.get(`/information/${id}`, config)
}
const Create = (data, config) => {
  return AxiosClient.post("/information", data, config);
};
const Update = (id, data, config) => {
  return AxiosClient.put(`/information/id?id=${id}`, data, config);
};
const Delete = (id, config) => {
  return AxiosClient.delete(`/information/id?id=${id}`, config);
};
const ShopApi = { GetAll, GetById, Create, Update, Delete };

export default ShopApi