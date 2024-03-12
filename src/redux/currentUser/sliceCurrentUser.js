import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null
}

export const currentUserSlice = createSlice({
    name: "currentUser",
    initialState,
    reducers:{
        getCurrentUser: (state) =>
    }
})