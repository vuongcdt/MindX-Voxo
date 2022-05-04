import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cookie: null,
    cookie_expiration: null,
    cookie_name: null,
    user: {
        id: null,
        username: null,
        nicename: null,
        email: null,
        url: null,
        registered: null,
        displayname: null,
        firstname: null,
        lastname: null,
        nickname: null,
        description: null,
        capabilities: null,
        avatar: null,
    },
    wishlist_key: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            return {
                ...action.payload,
            };
        },
        logOut: (state, action) => {
            return {
                ...initialState,
            };
        },
    },
});

export const { loginSuccess, logOut } = authSlice.actions;

export default authSlice.reducer;
