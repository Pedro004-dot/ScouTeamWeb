import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormHelperText} from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRegionState } from '../../../redux/currentProfile/sliceCurrentProfile';
import { fetchStates, fetchCities } from '../../../helpers/buscaCidade';

export default function RegionState() {
  const {profile} = useSelector((rootReducer)=> rootReducer.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [estados,setEstados] = useState([])
  const [cidades,setCidades] = useState([])
  const [estado,setEstado] = useState([])
  const [cidade,setCidade] = useState([])
 
  useEffect(() => {
    fetchStates().then(setEstados);
}, []);

useEffect(() => {
    if (estado) {
        fetchCities(estado.id).then(setCidades);
    } else {
        setCidades([]);
    }
}, [estado]);

  const handleTitle = ()=>{
    if(profile.perfil === "Clube"){
      return "Selecione o estado e cidade do clube"
    }else if (profile.perfil === "Organizador de campeonatos"){
      return "Selecione o estado e cidade da competição"
    }else {
       return "Selecione seu estado de origem"
    }
  }
  const handleHelperText = ()=>{
    if(profile.perfil === "Clube"){
      return "Mostre aos atletas e aos treinadores o estado e cidade da sua base"
    }else if (profile.perfil === "Organizador de campeonatos"){
      return "Apresente a clubes, atletas e empresários o estado e cidade da competição"
    }else{
      return  "Apresente a clubes e empresarios o seu estado e cidade de origem."
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
        
        <div className='location-createChampionship' >
                      <Autocomplete
                        className='local-createChampionship'
                        options={estados}
                        getOptionLabel={(option) => option.nome}
                        onChange={(event, newValue) => setEstado(newValue)}
                        placeholder='Selecione aqui seu estado'
                    />
                    <Autocomplete
                        className='local-createChampionship'
                        style={{marginTop:"10px"}}
                        options={cidades}
                        getOptionLabel={(option) => option.nome}
                        onChange={(event, newValue) => setCidade(newValue)}
                        placeholder='Selecione aqui sua cidade'
                        disabled={!estado}
                    />
                    </div>      
        <FormHelperText>
           {handleHelperText()}
        </FormHelperText>
        </FormControl>
       <div className='btn-container-perfil' >
       <button
        onClick={()=>
       { if(estado){
        dispatch(loadRegionState({
          estado: estado.nome,
          cidade: cidade.nome
        }))
        
        toast.success(`Você selecionou o estado ${estado.nome} e a cidade ${cidade.nome}`)
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