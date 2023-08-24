import AxiosClient from "./api";
const GetAll = (config) => {
    return AxiosClient.get("/foodProduct/getByHome?Top=8", config)
}
const GetAllFillter = (config) => {
    return AxiosClient.get("/foodProduct/getfillter", config)
}
const GetById = (id, config) => {
    return AxiosClient.get(`/foodProduct/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/foodProduct/", data, config);
};
const Update = (id, data, config) => {
    return AxiosClient.put(`/foodProduct/${id}`, data, config);
};
const Delete = (id, config) => {
    return AxiosClient.delete(`/foodProduct/${id}`, config);
};
const ProductFoodApis = { GetAll, GetAllFillter, GetById, Create, Update, Delete };

export default ProductFoodApis;