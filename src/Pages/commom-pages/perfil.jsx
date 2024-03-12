import { Autocomplete ,FormControl, FormLabel, FormHelperText } from '@mui/joy';
import "../../Sass/Perfil.scss"
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function Perfil() {
    const perfis = ["Agente","Atleta","Clube","Competição","Treinador"]
    const [perfil,setPerfil] = useState()
    const navigate = useNavigate()

    const mediador = (perfil)=>{
        switch (perfil) {
            case "Agente":
                console.log("Agente")
                break;
                case "Atleta":
                    navigate("/registro/atleta/posicao")
                    break;
            default:
                break;
        }
    }
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
        onClick={()=> perfil !== (undefined || null) ?
        mediador(perfil) : 
        toast.error('Você precisa selecionar um perfil') }
        className='botao'
         >      
        Próxima
         </button>
       </div>
      
     </div>
     
   </div>
 );
}