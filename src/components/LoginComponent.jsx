import { useState } from "react";
import "../Sass/LoginComponent.scss"
import "../Sass/Button.scss"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {api} from "../db/services/services"


export default function LoginComponent() {
  const [credentails,setCredentails] = useState({})
  const navigate  = useNavigate()
  const login = async ()=>{
    try {
      const response = await api.post("user/authenticate",{
        email: credentails.email,
        password:credentails.password

      })
      localStorage.setItem("userEmail", credentails.email) 
      navigate("/Home")
      toast.success('Signed In to Scout team')
    } catch(err) {
      console.log("Impossivel de logar")
      toast.error('Senha ou usuario incorreto')
    }
  }
 
 return (
  
   <div className="login-container" >
    <div className="login-wrapper" >  
    <div className="title" >
      <h1>Login</h1>
     <p className="subtitle" >Digite suas informações</p>
    </div>  
      <div className="login-auth-inputs" >
        <input
         onChange={(event)=>setCredentails({...credentails, email: event.target.value})}
        className="commom-input"
        placeholder="Entre com o email"
        />
        <input 
        onChange={(event)=>setCredentails({...credentails, password: event.target.value})}
        className="commom-input"
        placeholder="Entre com a senha"
        type="password"
        />
        <p>Deseja criar uma conta? <span onClick={()=> navigate("/registro")} >Clique aqui</span></p>
         <button className="botao" onClick={login}>Login</button>
         <hr></hr>    
      </div>
   </div>
   </div>
 );
}
{/* <div className="google-btn" >
           <GoogleButton
           onClick={googleSignIn}
           />
         </div> */}