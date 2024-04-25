import { useEffect,useState } from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import "../Sass/Championship.scss"
import PropTypes from 'prop-types';
import ChampionshipComponent from "../components/ChampionshipComponent";
Championship.propTypes = {
    currentUser: PropTypes.object,
    
};
export default function Championship({currentUser}) {
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            (!res?.accessToken)? navigate("/"): setLoading(false)
        })
    },[])
   
 return loading ? <Loader/> :(
    <div className="main">  
       <ChampionshipComponent currentUser={currentUser} />
  </div>
    
  
 );
}