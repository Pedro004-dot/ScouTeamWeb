import { useState } from "react";
import {RegisterAPI } from "../api/AuthAPI";
import "../Sass/RegisterComponent.scss"
import { useNavigate } from "react-router-dom";
import { postUserData } from "../api/FirestoreAPI";
import getUniqueID from "../helpers/getUniqueID"


export default function RegisterComponent() {
  const [credentails,setCredentails] = useState({})
  const navigate = useNavigate()
  const register = async ()=>{
    try {
     const res = await  RegisterAPI(credentails.email,credentails.password)
    
     postUserData({
      userID: getUniqueID(),
      name : credentails.name ,
      email : credentails.email
      }) 
      localStorage.setItem("userEmail", credentails.email)
      navigate("/registro/escolhaPerfil")
    } catch (error) {
      alert(error.errors.message)
    }
   
  }
  
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
     
     <button className="botao" onClick={register}>Registrar</button>
    </div>
   </div>
 );
}