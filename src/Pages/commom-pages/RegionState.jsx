import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormHelperText } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadRegionState } from '../../redux/currentProfile/sliceCurrentProfile';


export default function RegionState() {
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

  
  
    return ( 
      <div className="perfil-container" >
     <div className="perfil-content" >

         <h1 className='perfil-title' > <FaArrowLeftLong 
         size={18} 
         color={"#A12400"} 
         onClick={()=> navigate("/registro/atleta/posicao")}
         style={{marginRight:"15"}}
         /> Selecione seu estado</h1>
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
            É importante para clubes e empresarios<br/> saberem onde você mora.
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