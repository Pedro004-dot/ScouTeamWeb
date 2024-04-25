import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormHelperText} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRegionState } from '../../../redux/currentProfile/sliceCurrentProfile';


export default function RegionState() {
  const {profile} = useSelector((rootReducer)=> rootReducer.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [estado,setEstado] = useState()
 
  const estados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins"
]

  const handleTitle = ()=>{
    if(profile.perfil === "Clube"){
      return "Selecione o estado do clube"
    }else{
      return "Selecione seu estado de origem"
    }
  }
  const handleHelperText = ()=>{
    if(profile.perfil === "Clube"){
      return "Mostre aos atletas e aos treinadores o estado da sua base"
    }else{
      return  "Apresente a clubes e empresarios o seu estado de origem."
    }
  }
 
  
  
    return ( 
      <div className="perfil-container" >
     <div className="perfil-content" >

         <h1 className='perfil-title' > <FaArrowLeftLong 
         size={18} 
         color={"#A12400"} 
         onClick={()=> navigate("/registro/escolhaPerfil")}
         style={{marginRight:"15"}}
         /> 
         {handleTitle()}</h1>
        <FormControl>
        
        <Autocomplete
        className='autocomplete'
        placeholder='Selecione aqui seu estado'
        options={estados}
        sx={{ width: 300 }}
        onChange={(event, newValue) => {
        setEstado(newValue);
      }}
        />      
        <FormHelperText>
           {handleHelperText()}
        </FormHelperText>
        </FormControl>
       <div className='btn-container-perfil' >
       <button
        onClick={()=>
       { if(estado){
        dispatch(loadRegionState({
          regionState : estado
        }))
        toast.success(`Você selecionou o estado ${estado}`)
           navigate("/registro/salvarInformacoes") 
           
        }else{
          toast.error('Você precisa selecionar um estado') }
        }}
        className='botao'
         >      
        Próxima
         </button>
       </div>
      
     </div>
     
   </div>
    );
   }