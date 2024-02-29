// import { LoginAPI } from "../api/AuthAPI";
import LoginComponent from "../components/LoginComponent";
import { useEffect,useState} from "react";
import {onAuthStateChanged} from "firebase/auth"
import {auth} from "../firebaseConfig"
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader/Loader";
export default function Login() {
 const [loading,setLoading] = useState(true)
 const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth, (res)=>{
       (res?.accessToken)? navigate("/Home"): setLoading(false)
    })
},[])
 return loading ? <Loader/> :  (
   <div>
    <LoginComponent/>
   </div>
  );
}