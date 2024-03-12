import "./Header.scss"
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { TiWatch } from "react-icons/ti";
import { FiClipboard } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import user from "../../../assets/user.png"
import { useNavigate } from "react-router-dom";
import ProfilePopUp from "../ProfilePopUp/ProfilePopUp";
import { useState } from "react";

export default function Header(){
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const navigate = useNavigate()
    const goToRoute = (route)=>{
        navigate(route)
    }
    const handleLogout = () => {
        setIsPopUpOpen(true);
      };
    
      const handleClosePopUp = () => {
        setIsPopUpOpen(false);
      };

    return(
        <div className="topbar-main">
             <p className="logo">SCOUT<br/>TEAM</p>
             <div className="react-icons" >
                <GoHome 
                 size={25} 
                 className="react-icon" 
                 onClick={ ()=> goToRoute("/home")}
                  />
                <FaRegUser 
                size={25} 
                className="react-icon" 
                onClick={ ()=> goToRoute("/profile")}
                 />
                <TiWatch 
                size={25} 
                className="react-icon"
                 onClick={ ()=> goToRoute("/noticias")}

                 />
                <FiClipboard 
                size={25} 
                className="react-icon" 
                onClick={ ()=> goToRoute("/atletas")}
                 />
                <GoBell
                 size={25}
                  className="react-icon" 
                  onClick={ ()=> goToRoute("/notificacoes")}
                   />
                <img 
                 src={user}
                 alt="user" 
                 className="user-logo"
                 onClick={handleLogout}
                 style={{ cursor: "pointer" }}           
                 />
             </div>
             {isPopUpOpen && <ProfilePopUp 
              onClose={handleClosePopUp} 
              
              />}
        </div>
    )
}
