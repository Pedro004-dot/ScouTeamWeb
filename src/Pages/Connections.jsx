import { useEffect,useState } from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import ConnectionsComponent from "../components/ConnectionsComponent";
import PropTypes from 'prop-types';
Connections.propTypes = {
    currentUser: PropTypes.object,
    
};
export default function Connections({currentUser}) {
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            (!res?.accessToken)? navigate("/"): setLoading(false)
        })
    },[])
   
 return loading ? <Loader/> :(
    <div className="main">
      
      <ConnectionsComponent currentUser={currentUser} />
  </div>
    
  
 );
}