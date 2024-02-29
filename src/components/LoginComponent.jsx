import { useState } from "react";
import {LoginAPI , GoogleSignInAPI} from "../api/AuthAPI";
import "../Sass/LoginComponent.scss"
import "../Sass/Button.scss"
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export default function LoginComponent() {
  const [credentails,setCredentails] = useState({})
  const navigate  = useNavigate()
  const login = async ()=>{
    try {
     let res = await  LoginAPI(credentails.email,credentails.password)
     localStorage.setItem("userEmail", res.user._UserImpl.email)
      // console.log(res.user.email)
      navigate("/Home")
      toast.success('Signed In to Scout team')
    } catch(err) {
      console.log("Impossivel de logar")
      toast.error('Please Check youer Credentials')
    }
  }
  const googleSignIn = async ()=>{
    try {
      let response = await GoogleSignInAPI()
      console.log(response)
      navigate("/Home")
    } catch (error) {
      console.log("Nao foi possivel logar")
      toast.error('Usuario nao cadastrado')
    }
  }
 return (
  
   <div>
   <h1 className="heading" >Login</h1>
    <div className="login-wrapper" >
     
      <div className="auth-inputs" >
        <input onChange={(event)=>setCredentails({...credentails, email: event.target.value})}
        className="commom-input"
        placeholder="Entre com o email"
        />
        <input onChange={(event)=>setCredentails({...credentails, password: event.target.value})}
        className="commom-input"
        placeholder="Entre com a senha"
        />
        <p>Deseja criar uma conta? <span onClick={()=> navigate("/register")} >Clique aqui</span></p>
         <button className="botao" onClick={login}>Login</button>
         <hr></hr>
         <div className="google-btn" >
           <GoogleButton
           onClick={googleSignIn}
           />
         </div>
      </div>
   </div>
   </div>
 );
}