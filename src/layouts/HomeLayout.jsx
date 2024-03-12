import { useEffect,  useState } from "react";
import Home from "../Pages/Home"
import Header from "../components/common/Header/Header"
import { getCurrentUser } from "../api/FirestoreAPI";

export default function HomeLayouts() {
  const [currentUser,setCurrentUser] = useState({})
    const currEmail = localStorage.getItem('userEmail') 
    useEffect(()=>{
        getCurrentUser(setCurrentUser,currEmail)
    },[])
 return (
   <div>
   <Header/>
   <Home  currentUser={currentUser} />
   </div>
 );
}