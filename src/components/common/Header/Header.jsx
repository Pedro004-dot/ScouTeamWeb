import "./Header.scss"

import { GoBell, GoSearch,GoHome,GoPeople,GoGlobe  } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import ProfilePopUp from "../ProfilePopUp/ProfilePopUp";
import { useEffect, useRef, useState } from "react";
import SearchUsers from "../SearchUsers/SearchUsers";
import PropTypes from 'prop-types';
import { GoXCircle } from "react-icons/go";
import { getAllUsers } from "../../../api/FirestoreAPI";
Header.propTypes = {
    currentUser: PropTypes.object,
    
};

export default function Header({currentUser}){
  
    // const [isSearch, setIsSearch] = useState(false)
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [searchInput,setSearchInput] = useState("")
    const [isOpen, setIsOpen] = useState(false);
    const searchContainerRef = useRef(null);
    const [users,setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const navigate = useNavigate()

    const closeSearch = ()=>{
        return setIsOpen(false) && setSearchInput(" ")
    }

    const goToRoute = (route)=>{
        navigate(route)
    }

    const handleLogout = () => {
        setIsPopUpOpen(true);
      };
    
      const handleClosePopUp = () => {
        setIsPopUpOpen(false);
      };

      const openUser = (user) => {
        setIsOpen(false); // Garante que o dropdown será fechado
        navigate('/profile', { state: { id: user.userID, email: user.email } });
    };

 
    
    useEffect(()=>{
        getAllUsers(setUsers)
    },[])
    useEffect(() => {
        const debouncedSearch = setTimeout(() => {
            if (searchInput.length !== 0) {
                const searched = users.filter(user =>
                    Object.values(user).join('').toLowerCase().includes(searchInput.toLowerCase())
                );
                setFilteredUsers(searched);
            } else {
                setFilteredUsers(users);
            }
        }, 500);

        return () => clearTimeout(debouncedSearch);
    }, [searchInput, users]);
    return(
        <div className="topbar-main">
        <div className="topbar-left" ref={searchContainerRef}> 
            <p className="logo">SCOUT<br/>TEAM</p>
             <SearchUsers setSearchInput={setSearchInput} setIsOpen={setIsOpen}/>
        </div>
             
             <div className="react-icons" >
                <GoHome 
                 size={25} 
                 className="react-icon" 
                 onClick={ ()=> goToRoute("/home")}
                  />
                <GoSearch
                 size={25} 
                 className="react-icon" 
                 />
                {/* <FaRegUser 
                size={25} 
                className="react-icon" 
                onClick={ ()=> goToRoute("/profile")}
                 /> */}
                <GoGlobe
                size={25} 
                className="react-icon"
                onClick={ ()=> goToRoute("/noticias")}

                 />
                <GoPeople
                size={25} 
                className="react-icon" 
                onClick={ ()=> goToRoute("/conexoes")}
                 />
                <GoBell
                 size={25}
                  className="react-icon" 
                  onClick={ ()=> goToRoute("/notificacoes")}
                   />
                <img 
                 src={currentUser.imageLink}
                 alt="user" 
                 className="user-logo"
                 onClick={handleLogout}
                 style={{ cursor: "pointer" }}           
                 />
                 
             </div>
            
            {isOpen && (
                <div className="search-results">
                <div><GoXCircle onClick={()=> closeSearch()} className="close-search-results"/> </div>
                    {filteredUsers.length === 0 ? (
                        <div>  <p>Nenhum resultado encontrado</p>
                    </div>
                     ): filteredUsers.map((user)=>(
                        <div key={user.id} className="search-inner" onClick={()=> openUser(user)} >
                     
                        <img src={user.imageLink} />
                        <p className="search-name-user">{user.name}</p>  
                        <p className="search-resume-user">{user.perfil} </p>
                         
                        </div>
                    ))}
                </div>
            )}
             
           {isPopUpOpen && <ProfilePopUp 
            onClose={handleClosePopUp} 
            
            />}
        </div>
    )
}
