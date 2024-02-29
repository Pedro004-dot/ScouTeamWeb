import { useMemo, useState } from "react";
import Home from "../Pages/Home"
import Header from "../components/common/Header/Header"
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayouts() {
  const [currentUser,setCurrentUser] = useState({})
  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])
  
 return (
   <div>
   <Header/>
   <Home  currentUser={currentUser} />
   </div>
 );
}