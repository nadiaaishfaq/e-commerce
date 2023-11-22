import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./UserSlice"
const store = configureStore({
    reducer:{
        user: apiReducer,
    },
})

export {store}