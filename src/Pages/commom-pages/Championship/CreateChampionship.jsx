import  { useEffect, useState } from 'react';
import { Input } from '@mui/joy';
import TextField from '@mui/material/TextField';
import { Autocomplete } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { fetchStates, fetchCities } from '../../../helpers/buscaCidade';
import '../../../Sass/CreateChampionship.scss';
import { useDispatch} from 'react-redux';
import { loadFirstInformation } from '../../../redux/championship/sliceChampionship';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

export default function CreateChampionship() {
  
  const dispatch = useDispatch()

    const [nomeCampeonato, setNomeCampeonato] = useState('');
    const [estadoCampeonato, setEstadoCampeonato] = useState('');
    const [cidadeCampeonato, setCidadeCampeonato] = useState('');
    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [dataInicioCampeonato, setDataInicioCampeonato] = useState(dayjs());


    useEffect(() => {
        fetchStates().then(setEstados);
    }, []);

    useEffect(() => {
        if (estadoCampeonato) {
            fetchCities(estadoCampeonato.id).then(setCidades);
        } else {
            setCidades([]);
        }
    }, [estadoCampeonato]);
    
const navigate = useNavigate()
const handleSubmit = (event, nomeCampeonato, cidadeCampeonato, estadoCampeonato, dataInicioCampeonato) => {
  event.preventDefault();  // Impede que o formulário seja submetido de forma tradicional.

  if (!nomeCampeonato) {
    toast.error("É preciso preencher o campo de nome do campeonato");
    return;
  } 
  
  else if (!cidadeCampeonato) {
    toast.error("É preciso preencher o campo de cidade do campeonato");
    return;
  } 
  
  else if (!estadoCampeonato) {
    toast.error("É preciso preencher o campo de estado do campeonato");
    return;
  } 
 
  else if (!dataInicioCampeonato || !dataInicioCampeonato.isValid()) {
    toast.error("É preciso preencher o campo de data de início do campeonato com uma data válida");
    return;
  } 
  if(nomeCampeonato, cidadeCampeonato, estadoCampeonato, dataInicioCampeonato){  
     dispatch(loadFirstInformation({
      name: nomeCampeonato,
      cidade: cidadeCampeonato,
      estado: estadoCampeonato,
      dataInicial: dataInicioCampeonato,
    }))
      toast.success("Campeonato criado com sucesso");
      navigate("/criarcampeonato/informacoescampeonato");}
  
  
}

    return (
        <div className="main-createChampionship">
            <form className="form-createChampionship">
            <div className='head-form-createChampionship'>
              <GoArrowLeft size={20} onClick={()=> navigate("/competicoes")}/>
                <h1>Crie seu campeonato</h1>
            </div>
            
                <div className="inputs-createChampionship">
                    <Input
                        placeholder="Nome do campeonato"
                        variant="soft"
                        value={nomeCampeonato}
                        onChange={(event) => setNomeCampeonato(event.target.value)}
                        className="name-championship"
                    />
                    <div className='location-createChampionship' >
                      <Autocomplete
                        className='local-createChampionship'
                        options={estados}
                        getOptionLabel={(option) => option.nome}
                        onChange={(event, newValue) => setEstadoCampeonato(newValue)}
                        renderInput={(params) => <TextField {...params} placeholder="Selecione aqui seu estado" />}
                    />
                    <Autocomplete
                        className='local-createChampionship'
                        options={cidades}
                        getOptionLabel={(option) => option.nome}
                        onChange={(event, newValue) => setCidadeCampeonato(newValue)}
                        renderInput={(params) => <TextField {...params} placeholder="Selecione aqui sua cidade" />}
                        disabled={!estadoCampeonato}
                    />
                    </div>
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            className='date-createChampionship'
                            label="Data de inicio"
                            value={dataInicioCampeonato}
                            onChange={setDataInicioCampeonato}
                            renderInput={(params) => <TextField {...params} />}
                            minDate={dayjs()}
                            inputFormat="DD/MM/YYYY"
                        />
                        
                    </LocalizationProvider>
                </div>
                <div className='area-button-createChampionship'> 
                 <button 
                 className='button-createChampionship'
                 onClick={(event) => handleSubmit(event, nomeCampeonato, cidadeCampeonato, estadoCampeonato, dataInicioCampeonato)}
                 >Seguinte</button>
                </div>
               
            </form>
        </div>
    );
}
