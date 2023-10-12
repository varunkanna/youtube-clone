import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./AuthSlice";

export default configureStore({
    reducer:{
        auth: reducers
    }
})