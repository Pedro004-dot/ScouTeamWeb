
import { combineReducers } from "redux";
import  useReducerUser  from "./currentUser/sliceCurrentUser";
import useReducerProfile from "./currentProfile/sliceCurrentProfile"

export default combineReducers({
    user : useReducerUser,
    profile : useReducerProfile,
})
