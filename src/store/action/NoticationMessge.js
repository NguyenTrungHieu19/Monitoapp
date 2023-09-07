export const ShowMessgeSucsse = (content)=>{
    return {
        type:"Show_Notication",
        payload: {
            content,
        },
    };
};
export const HideMessgeSucsse =()=>{
    return {
        type:"Hide_Notication"
    }
};
export const ShowMessgeErorr =()=>{
    return {
        type:"Show_Erorr",
        payload: {
            
        },
    }
};
export const HideMessgeErorr =()=>{
    return {
        type:"Hide_Erorr"
    }
}; 
export const FillterProductPet =(data)=>{
    return {
        type:"Fillter_ProductPet",
        payload:{
            data,
        }
    }
}