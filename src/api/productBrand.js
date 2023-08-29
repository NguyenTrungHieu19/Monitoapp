import AxiosClient from "./api";
const GetAll = (config) => {
    return AxiosClient.get("/productBrand/getAll", config)
}
const GetAllFillter = (config) => {
    return AxiosClient.get("/productBrandr", config)
}
const GetById = (id, config) => {
    return AxiosClient.get(`/productBrand/${id}`, config)
}
const Create = (data, config) => {
    return AxiosClient.post("/productBrand/", data, config);
};
const Update = (id, data, config) => {
    return AxiosClient.put(`/productBrand/${id}`, data, config);
};
const Delete = (id, config) => {
    return AxiosClient.delete(`/productBrand/${id}`, config);
};
const ProductBrandApis = { GetAll, GetAllFillter, GetById, Create, Update, Delete };

export default ProductBrandApis;