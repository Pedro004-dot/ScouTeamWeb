import { useSelector } from "react-redux";
import "../../../Sass/SaveProfile.scss"
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/joy";
import{  postUserData }from "../../../api/FirestoreAPI"
import { RegisterAPI } from "../../../api/AuthAPI";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function SaveProfile() {
  const {profile} = useSelector((rootReducer)=> rootReducer.profile)
  const {user} = useSelector((rootReducer)=> rootReducer.user) 
  console.log(user) 
  const navigate = useNavigate()
  
  const register = async ()=>{
    try {
     const res = await  RegisterAPI(user.email,user.password)
     
     
     postUserData({
      userID: user.userID,
      name : user.name ,
      email : user.email,
      perfil : profile.perfil,
      team: profile.team ? profile.team : null,
      region: profile.region ? profile.region : null,
      regionState: profile.regionState ? profile.regionState : null,
      características: profile.caracteristica ? profile.caracteristica : null,
      posição: profile.posicao  ? profile.posicao  : null,
      })
     
      localStorage.setItem("userEmail", user.email)
    } catch (error) {
      alert(error.errors.message)
    } 
  } 

 return ( 
  
   <div className="save-container" >
   <h1><FaArrowLeftLong 
         size={20} 
         color={"#A12400"} 
         onClick={()=> navigate("/registro/escolhaPerfil")}
         style={{marginRight:"15"}}
         /> Salvar informações</h1>
   <div className="save-modal" >
   <h3 >Confira as informações</h3>
   {profile.perfil ? (
  <div>
    <p>Perfil escolhido: {profile.perfil}</p>
  </div>
) : null}

   
   <p>{profile.region ? `Regiao escolhida: ${profile.region}`: null} </p>
   {profile.posicao ?
     <div>
          <p>Posições escolhidas:</p>
          {profile.posicao ? profile.posicao.map((item,index) => {
         return <p key={item.id}>{index+1} - {item.label}</p>;
         }) : null}   
      </div>
      :null}


    {profile.caracteristica ?
      <div>
          <p>Caracteristicas escolhidas:</p>
          {profile.caracteristica ? profile.caracteristica.map((item,index) => {
         return <p key={item.id}>{index+1} - {item.label}</p>;
         }) : null}   
      </div>
      : null}
      <p>{profile.regionState ? 
      `Estado escolhido: ${profile.regionState}`:
       null} </p>


      <p>{profile.team ? 
      `Time escolhido: ${profile.team}`:
       null} </p>


   </div>
   <button
   className="botao"
   onClick={()=>{
    register()
    navigate("/home")
   }}
   >
   Salvar Perfil
   </button>
   <FormHelperText>
     {"Apenas a informação do perfil não poderá ser alterada."}
     </FormHelperText>
   </div>
 );
}