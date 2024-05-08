import { useState } from "react";
import "../Sass/RegisterComponent.scss"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/currentUser/sliceCurrentUser";
import { toast } from "react-toastify";



export default function RegisterComponent() {
  const [credentails,setCredentails] = useState({}) 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const validateCredentials = () => {
    if (
      credentails.name.length < 5 ||
      !credentails.email.includes("@")
    ) {
      toast.error("O nome deve ter pelo menos 5 letras e o email deve ser válido.");
      return false;
    }
     navigate("/registro/escolhaPerfil")
    return true;
   
  };
 

  dispatch(loadUser({    
        name : credentails.name,
        email : credentails.email,
        password: credentails.password
      }))


 return (
   <div className="register-container">
    <div className="register-wrapper" >
    <div className="title" >
      <h1>Bem-vindo(a) </h1>
     <p className="subtitle" >Digite suas informações para começar</p>
    </div>   
      <div className="register-auth-inputs" >
       <input onChange={(event)=>setCredentails({...credentails, email: event.target.value})}
        className="commom-input"
        placeholder="Email"
        type="email"
        />

      <input onChange={(event)=>setCredentails({...credentails, name: event.target.value})}
        className="commom-input"
        type="text"
        placeholder=  "Nome"/>
      
     
        <input onChange={(event)=>setCredentails({...credentails, password: event.target.value})}
        className="commom-input "
        placeholder="Senha"
        type="password"
        />
          
         <p>Ja tem uma conta ? <span onClick={()=> navigate("/")} >Clique aqui</span></p>
      </div>
     
     <button className="botao" onClick={validateCredentials}>Registrar</button>
    </div>
   </div>
 );
}