import { useEffect, useState } from "react";
import Header from "../components/common/Header/Header"

import { getCurrentUser } from "../api/FirestoreAPI";
import Championship from "../Pages/Championship";

export default function ChampionshipLayout() {

  const[currentUser,setCurrentUser] = useState({})

  const currEmail = localStorage.getItem('userEmail') 
    useEffect(()=>{
        getCurrentUser(setCurrentUser,currEmail)
    },[])


 return (
   <div>
   <Header currentUser={currentUser}/>
   <Championship currentUser={currentUser} />
   </div>
 );
}