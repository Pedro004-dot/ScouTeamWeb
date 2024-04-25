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

export default function CreateChampionship() {
  
  const dispatch = useDispatch()

    const [nomeCampeonato, setNomeCampeonato] = useState('');
    const [estadoCampeonato, setEstadoCampeonato] = useState(null);
    const [cidadeCampeonato, setCidadeCampeonato] = useState(null);
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
    const handleSubmit = (nomeCampeonato,cidadeCampeonato,estadoCampeonato, dataInicioCampeonato)=>{
      if(!nomeCampeonato && !cidadeCampeonato && !estadoCampeonato && !dataInicioCampeonato){
        toast.error("É preciso preencher todos os campos")
      }else{
        dispatch(loadFirstInformation({
        name : nomeCampeonato,
        cidade : cidadeCampeonato,
        estado : estadoCampeonato,
        dataIncial : dataInicioCampeonato,
      }))
      }
      toast.success("Campeonato criado com sucesso")
        navigate("/competicoes")
      
    }
    

    return (
        <div className="main-createChampionship">
            <form className="form-createChampionship">
                <h1>Crie seu campeonato</h1>
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
                 onClick={()=> handleSubmit(nomeCampeonato,cidadeCampeonato,estadoCampeonato, dataInicioCampeonato)}
                 >Seguinte</button>
                </div>
               
            </form>
        </div>
    );
}
