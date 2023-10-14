import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState:{
        accessToken: sessionStorage.getItem('ytc_access_token') ? sessionStorage.getItem('ytc_access_token') : null,
        user: sessionStorage.getItem('ytc_user') ? JSON.parse(sessionStorage.getItem('ytc_user')) : null,
        loading:false
    },
    reducers:{
        loginFun:(state, action) => {
            state.accessToken = action.payload.accessToken
            const user = {
                id: action.payload.uid,
                name: action.payload.displayName,
                email: action.payload.email,
                image: action.payload.photoURL
            }
            state.user = user;
            sessionStorage.setItem('ytc_access_token', action.payload.accessToken);
            sessionStorage.setItem('ytc_user', JSON.stringify(user));
        },
        LogoutFun:(state) => {
            sessionStorage.removeItem('ytc_access_token');
            sessionStorage.removeItem('ytc_user');
            state.accessToken = null
            state.user = null
        }
    }
})

export const { loginFun, LogoutFun } = authSlice.actions;
export const reducers = authSlice.reducer