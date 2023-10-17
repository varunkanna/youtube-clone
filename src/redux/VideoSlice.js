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
                nextPageToken: action.payload.nextPageToken,
                // category: 'All'
            }
            state.videoData = videos;
        },
        addCategoryVideos:(state, action) => {
            // console.log("actext -->",action.payload);
            const videos = {
                videos: action.payload.items,
                nextPageToken: action.payload.nextPageToken,
                // category: keyword
            }
            state.videoData = videos;
        }
    }
})

export const { addVideos, addCategoryVideos } = videoSlice.actions;
export const videoReducers = videoSlice.reducer