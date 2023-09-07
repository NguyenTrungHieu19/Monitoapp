const initialState = {
    isOpen: false,
    content: "",
}
export const NoticationSucsseMessge = (state = initialState, action) => {
    switch (action.type) {
        case "Show_Notication":
            return{
                ...state,
                isOpen:true,
                content:action.payload.content,
            }
        case "Hide_Notication":
            return{
                ...state,
                isOpen:false,
                content:""
            }
        default:
            return state;
    }
}
