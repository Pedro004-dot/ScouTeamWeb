import { onLogout } from "../../../api/AuthAPI";
import "./ProfilePopUp.scss"
export default function ProfilePopUp({ onClose }) {
 return (
   <div className="popup-card" style={{ position: "absolute", right: "5px", top: "85px", zIndex: "90" }} >
     <ul className="popup-options" >
       <li className="popup-option" onClick={onLogout} >Sair da conta </li>
       <li className="popup-option" onClick={onClose} >Cancelar </li>
     </ul>

   </div>
 );
}