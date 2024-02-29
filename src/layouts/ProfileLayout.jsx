import { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Header from "../components/common/Header/Header";
import Profile from "../Pages/Profile";

export default function ProfileLayout(){
    const [currentUser,setCurrentUser] = useState({})

    useMemo(()=>{
        getCurrentUser(setCurrentUser)
    },[])
    
    return(
        <div>
            <Header/>
            <Profile currentUser={currentUser} />       
        </div>
    )
}