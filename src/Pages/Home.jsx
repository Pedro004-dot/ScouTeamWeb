import { useEffect,useState } from "react";
import HomeComponent from "../components/HomeComponent";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
import "../Sass/Home.scss"

export default function Home({currentUser}) {
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            (!res?.accessToken)? navigate("/"): setLoading(false)
        })
    },[])

 return loading ? <Loader/> :(
    <div className="main">
      
      <HomeComponent currentUser={currentUser} />
  </div>
    
  
 );
}