import {  useEffect,  useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Header from "../components/common/Header/Header";
import Profile from "../Pages/Profile";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/currentUser/sliceCurrentUser";


export default function ProfileLayout(){
    const dispatch = useDispatch()
    const [currentUser,setCurrentUser] = useState({})
    const currEmail = localStorage.getItem('userEmail') 

    useEffect(()=>{
        getCurrentUser(setCurrentUser,currEmail)    
    },[])
   dispatch(loadUser({
    userID: currentUser.userID,
    name: currentUser.name,
    email: currentUser.email,
    descricao: currentUser.descricao,
}))

    return(
        <div>
            <Header/>
            <Profile/>       
        </div>
    )
}