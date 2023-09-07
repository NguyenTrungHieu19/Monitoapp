import { combineReducers } from "@reduxjs/toolkit";
import { NoticationSucsseMessge } from "./NoticationSucsseMessge";
import { NoticationErorrMessge } from "./NoticationErorrMessge";
import { FillterProductPet } from "../action/NoticationMessge";
export const rootReducer = combineReducers({
    sucsseMessgea: NoticationSucsseMessge,
    erorrMessgea: NoticationErorrMessge,
    fillterProduct: FillterProductPet,
})