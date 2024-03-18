import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentUser: null
}

export const currentUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action)=>{
            return{
                ...state,
                user : {
                    userID : action.payload.userID,
                    name : action.payload.name,
                    email : action.payload.email,
                    password : action.payload.password,
                    descricao: action.payload.descricao,
                }
            }
        }
    }
})

export const {loadUser} = currentUserSlice.actions
export default currentUserSlice.reducer