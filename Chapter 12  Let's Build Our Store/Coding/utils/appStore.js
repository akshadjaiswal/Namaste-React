import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



// const { configureStore } = require("@reduxjs/toolkit");


const appStore = configureStore({
    reducer:{
        cart : cartReducer
    }
});
export default appStore;