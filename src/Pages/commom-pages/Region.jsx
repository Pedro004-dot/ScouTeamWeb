import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormHelperText } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loadRegion} from '../../redux/currentProfile/sliceCurrentProfile';
import { useDispatch, useSelector } from 'react-redux';
export default function Region() {
  const {profile} = useSelector((rootReducer)=> rootReducer.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [regiao,setRegiao] = useState()
  let regioes = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul","Todas as regiões"];

 return (
  <div className="perfil-container" >
  <div className="perfil-content" >
      <h1 className='perfil-title' > <FaArrowLeftLong 
      size={18} 
      color={"#A12400"} 
      onClick={()=> navigate("/registro/escolhaPerfil")}
      style={{marginRight:"15"}}
      />{profile.perfil === "Agente" ?
       "Qual região do brasil voce atual?" : 
       "Qual região do brasil acontece o campoeonato?"} </h1>
     <FormControl>
     <Autocomplete
     className='autocomplete'
     placeholder='Selecione aqui seu estado'
     options={regioes}
     sx={{ width: 300 }}
     onChange={(event, newValue) => {
     setRegiao(newValue);
   }}
     />      
     <FormHelperText>
         {profile.perfil === "Agente" ?
          "É importante para atletas e treinadores saberem onde você atua.":
           "É importante para clubes saberem onde acontece o campeonato."}
     </FormHelperText>
     </FormControl>
    <div className='btn-container-perfil' >
    <button
     onClick={()=>
    { if(regiao){
     dispatch(loadRegion({
       region : regiao
     }))
     toast.success(`Você selecionou a região ${regiao}`)
        navigate("/registro/salvarInformacoes") 
        
     }else{
       toast.error('Você precisa selecionar uma região') }
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