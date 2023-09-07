const initialState = {
    checkBox: "",
}
const FillterProductPet =(state = initialState, action)=>{
    switch (action.type) {
        case "Fillter_ProductPet":
            return {
              ...state,
              data:action.payload,
            }   
        default:
            return state;
    }
};
export default FillterProductPet;