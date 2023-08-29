import AxiosClient from "./api";
const GetAll = (config) =>{
    return AxiosClient.get("/product/getall?top=8", config)
}
const GetAllFillter = (search,sortBy,gender,page,pageSize) =>{
    return AxiosClient.get(`/product/getfillter?`, {
      params:{
        search,
        sortBy,
        gender,
        page,
        pageSize,
        
      }
    })
}
const GetById = (id, config)=>{
    return AxiosClient.get(`/product/${id}`, config)
}

const Create = (data, config) => {
    return AxiosClient.post("/product", data, config);
  };
  const Update = (id, data, config) => {
    return AxiosClient.put(`/product/${id}`, data, config);
  };
  const Delete = (id, config) => {
    return AxiosClient.delete(`/product/${id}`, config);
  };
const ProductPetApis = {GetAll,GetAllFillter,GetById,Create,Update,Delete};

export default ProductPetApis;