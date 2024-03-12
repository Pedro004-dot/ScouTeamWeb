import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormLabel, FormHelperText } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
export default function EstruturaRegistro({title,subTitle,object,value,setValue,rotaBack,rota }) {
  const navigate = useNavigate()
    return (
      <div className="perfil-container" >
  <div className="perfil-content" >

      <h1 className='perfil-title' > <FaArrowLeftLong 
      size={18} 
      color={"#A12400"} 
      onClick={()=> navigate({rotaBack})}
      style={{marginRight:"5"}}
      /> {title}</h1>
     <FormControl>
     <FormLabel>   
         {subTitle}
     </FormLabel>
     <Autocomplete
     className='autocomplete'
     placeholder='Escolha seu perfil aqui'
     options={object}
     sx={{ width: 300 }}
     onChange={(event, newValue) => {
     setValue(newValue);
   }}
     />      
     <FormHelperText>
         O perfil não pode ser alterado após o cadastro.
     </FormHelperText>
     </FormControl>
    <div className='btn-container' >
    <button
     onClick={()=> value !== (undefined || null) ?
     navigate({rota}) : 
     toast.error('Você precisa selecionar um perfil') }
     className='botao'
     style={{width: "100%", fontSize: "18", padding:"20"}}
      >      
     Próxima
      </button>
    </div>
   
  </div>
  
</div>
    );
   }