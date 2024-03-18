import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentProfile: null
}

export const currentProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        loadProfile: (state, action)=>{
            return{
                ...state,
                profile : {
                    perfil : action.payload.perfil,
                    posicao : null,
                    caracteristica : null,
                }
            }
        }, 
        loadPosition : (state,action)=>{
            return{
                ...state,
                profile : {
                  ...state.profile,
                  caracteristica : action.payload.caracteristica,
                  posicao : action.payload.posicao,
                  
                }
            }
        },
        loadTeam : (state,action)=>{
            return{
                ...state,
                profile :{
                    ...state.profile,
                    team : action.payload.team
                }
            }
        },
        loadRegionState : (state,action)=>{
            return{
                ...state,
                profile :{
                    ...state.profile,
                    regionState : action.payload.regionState
                }
            }
        },
        loadRegion : (state,action)=>{
            return{
                ...state,
                profile :{
                    ...state.profile,
                    region : action.payload.region
                }
            }
        }
    }
})

export const {loadProfile,loadPosition,loadTeam,loadRegionState,loadRegion} = currentProfileSlice.actions
export default currentProfileSlice.reducer