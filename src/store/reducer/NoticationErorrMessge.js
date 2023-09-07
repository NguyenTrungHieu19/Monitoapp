const initialState = {
    isOpen: false,
    content: "",
}
export const NoticationErorrMessge = (state = initialState, action) => {
    switch (action.type) {
        case "Show_Erorr":
            return{
                ...state,
                isOpen:true,
                content:"",
            }
        case "Hide_Erorr":
            return{
                ...state,
                isOpen:false,
                content:""
            }
        default:
            return state;
    }
}
