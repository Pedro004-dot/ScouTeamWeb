import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormLabel, FormHelperText } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTeam } from '../../../redux/currentProfile/sliceCurrentProfile';


export default function CurrentClub(){
  const {profile} = useSelector((rootReducer)=> rootReducer.profile)
  const dispatch = useDispatch()
  const [clube,setClube] = useState()
  const navigate = useNavigate()
  const clubes = [
    "Flamengo",
    "Palmeiras",
    "Santos",
    "Grêmio",
    "Athletico Paranaense",
    "São Paulo",
    "Internacional",
    "Corinthians",
    "Fortaleza",
    "Goiás",
    "Bahia",
    "Vasco da Gama",
    "Atlético Mineiro",
    "Fluminense",
    "Botafogo",
    "Ceará",
    "Cruzeiro",
    "CSA",
    "Chapecoense",
    "Avaí"
]
  
const handleTitle = ()=>{
  if(profile.perfil === "Treinador"){
    return "Selecione o clube"
  }else{
    return "Selecione o clube "
  }
}


const handleSubtitle = ()=>{
  if(profile.perfil === "Treinador"){
    return "O clube que você esta treinando atualmente."
  }else{
    return  " O clube que você esta jogando atualmente."
  }
}



 return (
  
  <div className="perfil-container" >
     <div className="perfil-content" >

         <h1 className='perfil-title' > <FaArrowLeftLong 
         size={20} 
         color={"#A12400"} 
         onClick={()=> navigate("/registro/escolhaPerfil")}
         style={{marginRight:"15"}}
         /> {handleTitle()} </h1>
        <FormControl>
        <FormLabel>   
            {handleSubtitle()}
        </FormLabel>
        <Autocomplete
        className='autocomplete'
        placeholder='Escolha seu time aqui'
        options={clubes}
        sx={{ width: 300 }}
        onChange={(event, newValue) => {
        setClube(newValue);
      }}
        />      
        <FormHelperText>
            O time precisa esta registrado na plataforma.
        </FormHelperText>
        </FormControl>
       <div className='btn-container-perfil' >
       <button
        onClick={()=>{ if (clube){
        dispatch(loadTeam({
          team : clube
        }))
        toast.success(`Você selecionou o clube ${clube}`)
        navigate("/registro/atleta/estado")
         }else{
           toast.error('Você precisa selecionar um clube')
        }
        
       } }
        className='botao'
         >      
        Próxima
         </button>
       </div>
      
     </div>
   </div>
 );
}
 