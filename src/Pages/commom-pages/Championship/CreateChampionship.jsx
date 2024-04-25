import { Autocomplete, Input } from "@mui/joy";
import "../../../Sass/CreateChampionship.scss"
import { useState } from "react";
import{React} from 'react'

export default function CreateChampionship() {
    const [nomeCampeonato,setNomeCampeonato] = useState('')
    const [cidadeCampeonato,setCidadeCampeonato] = useState('')
    const [dataCampeonato, setDataCampeonato] = useState([null, null]);
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
   <div className="main-createChampionship">
   <form className="form-createChampionship" >
   <div className="form-createChampionship">
     <h1>Crie seu campeonato</h1>
     <div className="inputs-createChampionship">
     <Input
        placeholder="Nome do campeonato"
        variant="soft"
        sx={{
          '--Input-radius': '0px',
          borderBottom: '2px solid',
          borderColor: 'neutral.outlinedBorder',
          '&:hover': {
            borderColor: 'neutral.outlinedHoverBorder',
          },
          '&::before': {
            border: '1px solid var(--Input-focusedHighlight)',
            transform: 'scaleX(0)',
            left: 0,
            right: 0,
            bottom: '-2px',
            top: 'unset',
            transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
            borderRadius: 0,
          },
          '&:focus-within::before': {
            transform: 'scaleX(1)',
          },
        }}
        value={nomeCampeonato}
        onChange={(event)=> setNomeCampeonato(event.target.value)}
      />
       <Autocomplete
        className='autocomplete'
        placeholder='Selecione aqui seu estado'
        options={estados}
        sx={{ width: 300 }}
        onChange={(event, newValue) => {
        setEstado(newValue);
      }}
      />
      <Autocomplete
        className='autocomplete'
        placeholder='Selecione aqui sua cidade'
        options={estados}
        sx={{ width: 300 }}
        onChange={(event, newValue) => {
        setCidadeCampeonato(newValue);
      }}
      />
      
     </div>
   </div>
   </form>
    
   </div>
 );
}