import { onLogout } from "../../../api/AuthAPI";

export default function ProfilePopUp() {
 return (
   <div className="popup-card" >
     <ul className="popup-options" >
       <li className="popup-option" onClick={onLogout} >Sair da conta </li>
     </ul>

   </div>
 );
}