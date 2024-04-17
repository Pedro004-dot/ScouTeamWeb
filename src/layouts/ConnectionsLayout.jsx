

import { useEffect, useState } from "react";
import Header from "../components/common/Header/Header"
import Connections from "../Pages/Connections";
import { getCurrentUser } from "../api/FirestoreAPI";

export default function ConnectionsLayout() {

  const[currentUser,setCurrentUser] = useState({})

  const currEmail = localStorage.getItem('userEmail') 
    useEffect(()=>{
        getCurrentUser(setCurrentUser,currEmail)
    },[])


 return (
   <div>
   <Header currentUser={currentUser}/>
   <Connections currentUser={currentUser} />
   </div>
 );
}