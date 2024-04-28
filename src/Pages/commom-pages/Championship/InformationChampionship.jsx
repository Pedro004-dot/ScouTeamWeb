import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "../../../Sass/InformationChamionship.scss"
import { useEffect, useState } from "react";
import { Autocomplete } from "@mui/joy";

import { Input } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loadSecondInformation } from "../../../redux/championship/sliceChampionship";
export default function InformationChamionship(){
    const navigate = useNavigate();
    const [categoriaCampeonato,setCategoriaCampeonato] = useState('');
    const [generoCampeonato,setGeneroCampeonato] = useState('');
    const [modalidadeCampeonato,setModalidadeCampeonato] = useState('');
    const [formatoCampeonato,setFormatoCampeonato] = useState('');
    const [numGruposCampeonato,setNumGruposCampeonato] = useState();
    const [faseEliminatoriaCampeonato,setFaseEliminatoriaCampeonato] = useState();
    
    const [nomeCategoria,setNomeCategoria] = useState('');
    const [numClubes, setNumClubes] = useState(4); 
    const [numGrupos, setNumGrupos] = useState([]); 
    const [faseEliminatoria,setFaseEliminatoria] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        let grupos = [];
        let fases = [];
    
        if (formatoCampeonato === "Grupo e Mata-Mata") {
            switch (numClubes) {
                case 8:
                    fases = ["Semifinal", "Final"];
                    grupos = [2, 4];
                    break;
                case 16:
                    fases = ["Quartas de Final", "Semifinal", "Final"];
                    grupos = [2, 4, 8];
                    break;
                case 32:
                    fases = ["Oitavas de Final", "Quartas de Final", "Semifinal", "Final"];
                    grupos = [2, 4, 8, 16];
                    break;
                default:
                    fases = [];
                    grupos = [];
            }
        } else if (formatoCampeonato === "Pontos corridos e Mata-mata") {
            if (numClubes <= 4) {
                fases = ["Final"];
                grupos = [2];
            } else if (numClubes <= 8) {
                fases = ["Semifinal", "Final"];
                grupos = [2, 4];
            } else if (numClubes <= 16) {
                fases = ["Quartas de Final", "Semifinal", "Final"];
                grupos = [2, 4, 8];
            } else if (numClubes <= 32) {
                fases = ["Oitavas de Final", "Quartas de Final", "Semifinal", "Final"];
                grupos = [2, 4, 8, 16];
            } else {
                fases = [];
                grupos = [];
            }
        } else if (formatoCampeonato === "Mata-Mata") {
            switch (numClubes) {
                case 2:
                    fases = ["Final"];
                    grupos = [2];
                    break;
                case 4:
                    fases = ["Semifinal", "Final"];
                    grupos = [2];
                    break;
                case 8:
                    fases = ["Quartas de Final", "Semifinal", "Final"];
                    grupos = [2, 4];
                    break;
                case 16:
                    fases = ["Oitavas de Final", "Quartas de Final", "Semifinal", "Final"];
                    grupos = [2, 4, 8];
                    break;
                case 32:
                    fases = ["16 avos de final","Oitavas de Final", "Quartas de Final", "Semifinal", "Final"];
                    grupos = [2, 4, 8, 16];
                    break;
                default:
                    fases = [];
                    grupos = [];
            }
        }
    
        setFaseEliminatoria(fases);
        setNumGrupos(grupos);
    }, [formatoCampeonato, numClubes]);
    
    
    const handleSubmit = (event)=>{     
            event.preventDefault(); 
        
            if (!nomeCategoria || !categoriaCampeonato || !generoCampeonato || !formatoCampeonato) {
                toast.error("Por favor, preencha todos os campos básicos.");
                return;
            }
            if (formatoCampeonato === "Grupo e Mata-Mata") {
                if (!numClubes || !numGruposCampeonato || !faseEliminatoriaCampeonato) {
                    toast.error("Por favor, preencha todos os campos para 'Grupo e Mata-Mata'.");
                    return;
                }
            } else if (formatoCampeonato === "Pontos corridos" || formatoCampeonato === "Pontos corridos e Mata-mata") {
                if (!numClubes) {
                    toast.error("Por favor, informe o número de times para o formato escolhido.");
                    return;
                }
                if (formatoCampeonato === "Pontos corridos e Mata-mata" && !faseEliminatoriaCampeonato) {
                    toast.error("Por favor, selecione a fase que começa o mata-mata.");
                    return;
                }
            } else if (formatoCampeonato === "Mata-Mata") {
                if (!numClubes || !faseEliminatoriaCampeonato) {
                    toast.error("Por favor, preencha todos os campos para 'Mata-Mata'.");
                    return;
                }
            }
            
            dispatch(loadSecondInformation({
                nomeCategoria:nomeCategoria,
                categoria: categoriaCampeonato,
                genero: generoCampeonato,
                modalidade: modalidadeCampeonato,
                formato: formatoCampeonato,
                numeroTime: numClubes,
                quantidadeGrupo: numGruposCampeonato,
                comecaMataMata: faseEliminatoria,
              }))
                toast.success("Campeonato criado com sucesso");
                navigate("/competicoes");
        };
        

    

      
     const categoriasCampeonato = [
        "Sub-15",
        "Sub-17",
        "Sub-20",
        "Profissional",
        "Amador",
        "Veterano",
        "Universitário"
      ];
      const generosJogadores = [
        "Masculino",
        "Feminino"
      ];
      const formatosCampeonato = [
        "Grupo e Mata-Mata",
        "Pontos corridos",
        "Mata-Mata",
        "Pontos corridos e Mata-mata"
      ];
      const quantidadeClubesGruposMata = [4, 8, 16, 32];
      
      const clubesLiga = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
     
      const handleFormat = (model)=>{
        if(model === "Grupo e Mata-Mata" ){
            return( 
                <div> 
                  <div className="grupo-mata-addInformationChampionship">
                        <Autocomplete
                            className='input-grupo-mata-addInformationChampionship'
                            options={quantidadeClubesGruposMata}
                            onChange={(event, newValue) => {
                                console.log('Novo valor de clubes:', newValue);
                                setNumClubes(newValue);
                            }}
                            placeholder="Quantidade de clubes?"
                        />
                        <Autocomplete
                            className='input-grupo-mata-addInformationChampionship'
                            options={numGrupos}
                            onChange={(event, newValue) => {
                                setNumGruposCampeonato(newValue);
                            }}
                            placeholder="Quantidade de grupos?"
                        />
                </div>
                <div className="inputs-faseEliminatoria-addInformationChampionship">
                    <Autocomplete
                        className="input-faseEliminatoria-addInformationChampionship"
                        options={faseEliminatoria}
                        onChange={(event, newValue) => {
                            setFaseEliminatoriaCampeonato(newValue);
                        }}
                        placeholder="Qual fase começa o mata mata?"
                    />
                </div>

                </div>
           )
        }else if(model === "Pontos corridos" ){
            return( <div>
               <Autocomplete
                        className='input-pontosCorridos-addInformationChampionship'
                        options={clubesLiga}
                        onChange={(event, newValue) => setNumClubes(newValue)}
                        placeholder="Numero de times"
                    />
            </div>)
        }else if(model === "Pontos corridos e Mata-mata" ){
            return( 
            <div>
               <div>
               <Autocomplete
                        className='input-pontosCorridos-addInformationChampionship'
                        options={clubesLiga}
                        onChange={(event, newValue) => setNumClubes(newValue)}
                        placeholder="Numero de times"
                    />
               </div>
              <div style={{marginTop:20}} className="inputs-faseEliminatoria-addInformationChampionship">
                    <Autocomplete
                        className="input-faseEliminatoria-addInformationChampionship"
                        options={faseEliminatoria}
                        onChange={(event, newValue) => {
                            setFaseEliminatoriaCampeonato(newValue);
                        }}
                        placeholder="Qual fase começa o mata mata?"
                    />
                </div>
            </div>)
        }else if(model === "Mata-Mata" ){
            return( <div> 
                <div className="grupo-mata-addInformationChampionship">
                      <Autocomplete
                          className='input-grupo-mata-addInformationChampionship'
                          options={quantidadeClubesGruposMata}
                          onChange={(event, newValue) => {
                              console.log('Novo valor de clubes:', newValue);
                              setNumClubes(newValue);
                          }}
                          placeholder="Quantidade de clubes?"
                      />  
              </div>
              <div className="inputs-faseEliminatoria-addInformationChampionship">
                    <Autocomplete
                        className="input-faseEliminatoria-addInformationChampionship"
                        options={faseEliminatoria}
                        onChange={(event, newValue) => {
                            setFaseEliminatoriaCampeonato(newValue);
                        }}
                        placeholder="Qual fase começa o mata mata?"
                    />
                </div>
              </div>)
        }else{
            return null
        }
      }

    return(
        <div className="main-createChampionship">
            <form className="form-createChampionship">
            <div className='head-form-createChampionship'>
              <GoArrowLeft size={20} onClick={()=> navigate("/competicoes")}/>
                <h1 style={{fontSize:20}}>Adicione mais informações sobre o campeonato</h1>
            </div>
            <div className="inputs-addInformationChampionship">
               <Input
                        placeholder="Nome da categoria"
                        value={nomeCategoria}
                        onChange={(event) => setNomeCategoria(event.target.value)}
                        className='input-addInformationChampionship'
                    />
                <Autocomplete
                            className='input-addInformationChampionship'
                            options={categoriasCampeonato}
                            onChange={(event, newValue) => setCategoriaCampeonato(newValue)}

                            placeholder="Qual a categoria do seu campeonato?"
                        />
                <Autocomplete
                            className='input-addInformationChampionship'
                            options={generosJogadores}
                            onChange={(event, newValue) => setGeneroCampeonato(newValue)}
                            placeholder="Qual o gênero dos atletas?"

                        />
                <Autocomplete
                    className='input-addInformationChampionship'
                    options={formatosCampeonato}
                    onChange={(event, newValue) => setFormatoCampeonato(newValue)}
                    placeholder="Qual o formato do seu campeonato?"
                        />
                {
                    handleFormat(formatoCampeonato)
                }
            </div>
                <div className='area-button-createChampionship'> 
                 <button 
                 className='button-createChampionship'
                 onClick={(event) => handleSubmit(event)}
                 >Seguinte</button>
                </div>
               
            </form>
        </div>
    )
}