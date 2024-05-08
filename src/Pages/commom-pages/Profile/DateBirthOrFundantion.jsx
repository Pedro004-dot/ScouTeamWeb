import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { FaArrowLeftLong } from "react-icons/fa6";
import TextField from '@mui/material/TextField';
import { toast } from "react-toastify";
import { loadDateNascimentoOrFundation } from "../../../redux/currentUser/sliceCurrentUser";


export default function DateBirthOrFundation(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {profile} = useSelector((rootReducer)=> rootReducer.profile)
    const minDate = dayjs('1900-01-01');
    const currentDate = dayjs()
    const maxDate = currentDate.subtract(1, 'year');
    const [date, setDate] = useState(dayjs());


    const mediador = (profile)=>{
        switch(profile) {
          case "Agente":
            navigate("/registro/empresario/regiao")
            break;
          case "Atleta":
            navigate("/registro/atleta/posicao")
            break;
          case "Clube":
            navigate("/registro/clube/estado")
            break;
          case "Organizador de campeonatos":
            navigate("/registro/clube/estado")
            break;
          case "Treinador":
            navigate("/registro/treinador/clube")
            break;
          default:
            toast.error('Perfil invalido')           
        }
       }
     const handleTitle = (profile)=>{
        if(profile === "Clube"){
            return "Ano de fundação"
        } else{
            return "Data de nascimento "
        }
        
     }
     
      return (
    <div className="atleta-container" >
      <div className="atleta-content" >
        <h1 className='atleta-title' > <FaArrowLeftLong
        size={18} 
        color={"#A12400"} 
        onClick={()=> navigate("/registro/escolhaPerfil")}
        style={{marginRight:"15"}}
        />{handleTitle(profile.perfil)} </h1>
        <div className='date-form' >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className='date-createChampionship'
                            label="Data"
                            value={date}
                            onChange={setDate}
                            renderInput={(params) => <TextField {...params} />}
                            maxDate={dayjs()}
                           
                        />
                        
         </LocalizationProvider>
        </div>
       
      <div className='btn-container-atleta' >
      <button
       onClick={()=>{
        if(!date.isValid()){      
            return toast.error('Digite uma data válida') 
        }
       dispatch(loadDateNascimentoOrFundation({
           dataNascimento : date
          }))
          mediador(profile.perfil)
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