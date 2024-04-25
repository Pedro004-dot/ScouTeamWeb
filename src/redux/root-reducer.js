
import { combineReducers } from "redux";
import  useReducerUser  from "./currentUser/sliceCurrentUser";
import useReducerProfile from "./currentProfile/sliceCurrentProfile"
import useReducerChampionship from "./championship/sliceChampionship"

export default combineReducers({
    user : useReducerUser,
    profile : useReducerProfile,
    championship : useReducerChampionship
})
