import { useNavigate } from "react-router-dom";
import "../Sass/Championship.scss"
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
ChampionshipComponent.propTypes = {
    currentUser: PropTypes.object,
    
};
export default function ChampionshipComponent({currentUser}) {
  //const {championship} = useSelector((rootReducer)=> rootReducer.championship)
  const navigate = useNavigate()

  const goToRoute = (route)=>{
    navigate(route)
}


  
 
 return (

    <div className="championship-main">
    <h2>Seja bem vindo(a), {currentUser.name}</h2>
    <p className="help-text">
      
    </p>
    <div className="button-group">
      <button className="button" onClick={()=>goToRoute('/criarcampeonato')}> CRIE SEU PRIMEIRO CAMPEONATO</button>
    </div>
  </div>

 );
}