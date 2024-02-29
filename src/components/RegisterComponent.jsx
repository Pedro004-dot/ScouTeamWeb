import { useState } from "react";
import {RegisterAPI } from "../api/AuthAPI";
import "../Sass/RegisterComponent.scss"
import { useNavigate } from "react-router-dom";
import { postUserData } from "../api/FirestoreAPI";


export default function RegisterComponent() {
  const [credentails,setCredentails] = useState({})
  const navigate = useNavigate()
  const register = async ()=>{
    try {
     const res = await  RegisterAPI(credentails.email,credentails.password)
     localStorage.setItem("userEmail", credentails.email)
     postUserData({name : credentails.name , email : credentails.email, password : credentails.password})
     console.log(credentails.email); // Output: juliatorrezanii@gmail.com 
      navigate("/")
    } catch (error) {
      alert(error.errors.message)
    }
   
  }
  
 return (
   <div className="register-wrapper" >
     <h1>Register Component</h1>
      <div className="auth-inputs" >
      <input onChange={(event)=>setCredentails({...credentails, name: event.target.value})}
        className="commom-input"
        type="text"
        placeholder="Entre com o nome"
        />
        <input onChange={(event)=>setCredentails({...credentails, email: event.target.value})}
        className="commom-input"
        placeholder="Entre com o email"
        type="email"
        />
        <input onChange={(event)=>setCredentails({...credentails, password: event.target.value})}
        className="commom-input"
        placeholder="Entre com a senha"
        type="password"
        />
         <p>Ja tem uma conta ? <span onClick={()=> navigate("/")} >Clique aqui</span></p>
      </div>
     
     <button className="register-btn" onClick={register}>Registrar</button>
   </div>
 );
}