import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations"

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: null,
    status: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [authOperations.register.fulfilled] (state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.login.fulfilled] (state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [authOperations.logOut.fulfilled] (state, action) {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false;
        },
        [authOperations.fetchCurrentUser.fulfilled] (state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
    }
})

export default authSlice.reducer