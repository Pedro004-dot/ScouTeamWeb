import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormLabel, FormHelperText } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function CurrentClub(){
  const [clube,setClube] = useState()
 
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
  const navigate = useNavigate()
 return (
  
  <div className="perfil-container" >
     <div className="perfil-content" >

         <h1 className='perfil-title' > <FaArrowLeftLong 
         size={18} 
         color={"#A12400"} 
         onClick={()=> navigate("/registro/atleta/posicao")}
         style={{marginRight:"15"}}
         /> Escolha de time</h1>
        <FormControl>
        <FormLabel>   
            Qual time você joga atualmente
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
        onClick={()=>{ if (clube !== undefined && clube !== null ){
        navigate("/registro/atleta/estado")
        localStorage.setItem("clubeAtual",clube)
         }else{
           toast.error('Você precisa selecionar um perfil')
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
 