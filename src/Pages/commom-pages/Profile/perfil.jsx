import { Autocomplete ,FormControl, FormLabel, FormHelperText } from '@mui/joy';
import "../../../Sass/Perfil.scss"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { loadProfile } from '../../../redux/currentProfile/sliceCurrentProfile';
export default function Perfil() {
    const dispatch = useDispatch()
    const perfis = ["Agente","Atleta","Clube","Organizador de campeonatos","Treinador"]
    const [perfil,setPerfil] = useState(null)
    const navigate = useNavigate()
   
 return (
   <div className="perfil-container" >
     <div className="perfil-content" >

         <h1 className='perfil-title' > <FaArrowLeftLong 
         size={18} 
         color={"#A12400"} 
         onClick={()=> navigate("/registro")}
         style={{marginRight:"15"}}
         /> Escolha de perfil</h1>
        <FormControl>
        <FormLabel>   
            Escolha seu perfil
        </FormLabel>
        <Autocomplete
        className='autocomplete'
        placeholder='Escolha seu perfil aqui'
        options={perfis}
        sx={{ width: 300 }}
        onChange={(event, newValue) => {
        setPerfil(newValue);
       
      }}
        />      
        <FormHelperText>
            O perfil não pode ser alterado após o cadastro.
        </FormHelperText>
        </FormControl>
       <div className='btn-container-perfil' >
       <button
        onClick={()=> {
         
          if(!perfil){
         return  toast.error('Você precisa selecionar um perfil') 
        }
        dispatch(loadProfile({
         perfil: perfil,
        }))
        navigate("/registro/dateBirthOrFundation")
         toast.success(`Você selecionou o perfil ${perfil}`) 
        
        }
        
        }
        className='botao'
         >      
        Próxima
         </button>
       </div>
      
     </div>
   </div>
 );
}