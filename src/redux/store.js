import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./AuthSlice";
import { videoReducers } from "./VideoSlice";

export default configureStore({
    reducer:{
        auth: reducers,
        video: videoReducers
    }
})