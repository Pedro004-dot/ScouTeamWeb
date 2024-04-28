import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    nameChampionship: null
}

export const championshipSlice = createSlice({
    name: "championship",
    initialState,
    reducers: {
        loadFirstInformation: (state, action)=>{
            return{
                ...state,
                championship : {
                    name : action.payload.name,
                    cidade : action.payload.cidade,
                    estado : action.payload.estado,
                    dataIncial : action.payload.dataIncial,
                }
            }
        }, 
        loadSecondInformation : (state,action)=>{
            return{
                ...state,
                championship : {
                  ...state.championship,
                  nomeCategoria: action.payload.nomeCategoria,
                  categoria : action.payload.categoria,
                  genero : action.payload.genero,
                  modalidade : action.payload.modalidade,
                  formato : action.payload.formato,
                  numeroTime : action.payload.numeroTime,
                  quantidadeGrupo : action.payload.quantidadeGrupo,
                  comecaMataMata : action.payload.comecaMataMata,
                }
            }
        },
        
    }
})

export const {loadFirstInformation,loadSecondInformation} = championshipSlice.actions
export default championshipSlice.reducer