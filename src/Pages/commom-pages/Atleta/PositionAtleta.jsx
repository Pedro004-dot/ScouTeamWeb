import { toast } from 'react-toastify';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Autocomplete ,FormControl, FormLabel, FormHelperText } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../../../Sass/PositionAtleta.scss"

export default function PositionAtleta(){
  const [posicao,setPosição] = useState([])
  const [caracteristica,setCaracteristica] = useState([])
  const navigate = useNavigate()
  const posicoes = [
    { id: 1, label: 'Goleiro' },
    { id: 2, label: 'Zagueiro' },
    { id: 3, label: 'Lateral-direito' },
    { id: 4, label: 'Lateral-esquerdo' },
    { id: 5, label: 'Volante' },
    { id: 6, label: 'Meio-campista' },
    { id: 7, label: 'Meia-direita' },
    { id: 8, label: 'Meia-esquerda' },
    { id: 9, label: 'Atacante' },
    { id: 10, label: 'Ponta-direita' },
    { id: 11, label: 'Ponta-esquerda' },
    { id: 12, label: 'Centroavante' },
  ];
  
  const caracteristicas = [
    { id: 13, label: 'Bom reflexo' },
    { id: 14, label: 'Comunicativo' },
    { id: 15, label: 'Seguro nas saídas' },
    { id: 16, label: 'Forte na marcação' },
    { id: 17, label: 'Cabeceio preciso' },
    { id: 18, label: 'Boa leitura de jogo' },
    { id: 19, label: 'Rápido' },
    { id: 20, label: 'Bom cruzamento' },
    { id: 21, label: 'Resistência física' },
    { id: 22, label: 'Habilidoso' },
    { id: 23, label: 'Bom posicionamento defensivo' },
    { id: 24, label: 'Apoio ao ataque' },
    { id: 25, label: 'Marcador' },
    { id: 26, label: 'Distribuição de bola' },
    { id: 27, label: 'Antecipação' },
    { id: 28, label: 'Visão de jogo' },
    { id: 29, label: 'Preciso nos passes' },
    { id: 30, label: 'Chute de longa distância' },
    { id: 31, label: 'Velocidade' },
    { id: 32, label: 'Drible eficiente' },
    { id: 33, label: 'Finalização precisa' },
    { id: 34, label: 'Criatividade' },
    { id: 35, label: 'Bom controle de bola' },
    { id: 36, label: 'Colabora na defesa' },
    { id: 37, label: 'Finalização com efeito' },
    { id: 38, label: 'Movimentação inteligente' },
    { id: 39, label: 'Faro de gol' },
    { id: 40, label: 'Mudança rápida de direção' },
    { id: 41, label: 'Drible rápido' },
    { id: 42, label: 'Assistências decisivas' },
    { id: 43, label: 'Líder em campo' },
    { id: 44, label: 'Chute potente' },
    { id: 45, label: 'Atuação na linha de fundo' },
    { id: 46, label: 'Finalização de cabeça' },
    { id: 47, label: 'Posicionamento na área' },
    { id: 48, label: 'Força física' },
  ];
    return (
  <div className="atleta-container" >
    <div className="atleta-content" >
      <h1 className='atleta-title' > <FaArrowLeftLong 
      size={18} 
      color={"#A12400"} 
      onClick={()=> navigate("/registro/escolhaPerfil")}
      style={{marginRight:"15"}}
      /> Escolha de posições</h1>
      <div className='posicoes' >
      <FormControl>
     <FormLabel>   
         Escolha as posições em que voce joga.
     </FormLabel>
     <Autocomplete
     multiple
     className='autocomplete'
     placeholder='Escolha seu perfil aqui'
     options={posicoes}
     sx={{ width: 300 }}
     getOptionLabel={(option) => option.label}
     isOptionEqualToValue={(option, value) => option.id === value.id}
     onChange={(event, newValue) => {
     setPosição(newValue);
   }}
     />      
     <FormHelperText>
         A posição pode ser alterado após o cadastro.
     </FormHelperText>
     </FormControl>
      </div>
      <div className='caracteristicas'>
      <FormControl>
     <FormLabel>   
         Cite algumas características.
     </FormLabel>
     <Autocomplete
     multiple
     className='autocomplete'
     placeholder='Escolha seu perfil aqui'
     options={caracteristicas}
     sx={{ width: 300 }}
     getOptionLabel={(option) => option.label}
     isOptionEqualToValue={(option, value) => option.id === value.id}

     onChange={(event, newValue) => {
     setCaracteristica(newValue);
     
   }}
     />    
     <FormHelperText>
         As características podem ser alteradas após o cadastro.
     </FormHelperText>
     </FormControl>
      </div>
     
    <div className='btn-container-atleta' >
    <button
     onClick={()=> posicao.length && caracteristica.length > 0  ?
     navigate("/registro/atleta/clube") : 
     toast.error('Você precisa selecionar algo') } 
     className='botao'
      >     
       
     Próxima
      </button>
    </div>
   
  </div>
  
</div>
    );
   }
  //  posicao  ? posicao.map(option => option.label)caracteristica ? caracteristica.map(option => option.label)