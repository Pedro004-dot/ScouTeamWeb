import { useNavigate } from "react-router-dom";
import { onLogout } from "../../../api/AuthAPI";
import Button from "../Button/button";
import "./ProfilePopUp.scss"
import { useMemo, useState } from "react";
import {getCurrentUser} from "../../../api/FirestoreAPI"
import PropTypes from 'prop-types';

ProfilePopUp.propTypes = {
    onClose: PropTypes.func,
    
};
export default function ProfilePopUp({ onClose }) {
  const navigate = useNavigate();
  const [currentUser,setCurrentUser] = useState({})
  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  })
 return (
   <div className="popup-card" 
   style={{ 
   position: "absolute", 
   right: "5px", 
   top: "85px", 
   zIndex: "90" 
   }} >
   <Button  onclick={onLogout} title={"Sair da conta"} />

   <Button  onclick={()=>
   navigate("/profile",{
    state : {
      id: currentUser?.userID
    }
   } 
   
   )
   } title={"Visualizar perfil"} />

   <Button  onclick={onClose} title={"Cancelar"}  />
    
     {/* <ul className="popup-options" >
       <li className="popup-option" onClick={onLogout} >Sair da conta </li>
       <li className="popup-option" onClick={onClose} >Cancelar </li>
     </ul> */}

   </div>
 );
}