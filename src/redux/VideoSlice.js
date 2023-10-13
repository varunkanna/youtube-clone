import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videoData:null,
    },
    reducers: {
        addVideos:(state, action) => {
            const videos = {
                videos: action.payload.items,
                nextPageToken: action.payload.nextPageToken
            }
            state.videoData = videos;
        }
    }
})

export const { addVideos } = videoSlice.actions;
export const videoReducers = videoSlice.reducer