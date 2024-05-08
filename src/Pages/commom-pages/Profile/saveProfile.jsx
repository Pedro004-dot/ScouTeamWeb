import { useSelector } from "react-redux";
import "../../../Sass/SaveProfile.scss"
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/joy";
import { FaArrowLeftLong } from "react-icons/fa6";
import { api } from "../../../db/services/services"
import { toast } from "react-toastify";
import generateID from "../../../helpers/generateID";

export default function SaveProfile() {
  const {profile} = useSelector((rootReducer)=> rootReducer.profile)
  const {user} = useSelector((rootReducer)=> rootReducer.user) 
  const navigate = useNavigate()
  
  const ids = (generateID(profile.perfil))
  
  const userData = {
    idUser: ids.idUser,
    idProfile: ids.idProfile,
    email: user.email,
    password: user.password,
    username: user.name,
    dateBirthOrFundation:user.dataNascimento.$d.getDate().toString()+'/'+user.dataNascimento.$d.getMonth().toString()+'/'+user.dataNascimento.$d.getFullYear().toString(),
    address: {
      city: profile.cidade,
      state: profile.estado
    }
  }
  
  const profileData ={
    idUser: ids.User,
    idProfile: ids.idProfile,
    position:profile.posicao.map(posicao => posicao.label),
    caracteristicas: profile.caracteristica.map(caracteristica => caracteristica.label),
  }

  const registerUser = async ()=>{
    try {
    const response = await api.post('/user/registrarUsuario', {
      user: userData,
      profile: profileData
  });
    toast.success(`Usuário e perfil criados com sucesso: ${user.name}`);
    localStorage.setItem("userEmail", user.email);
    navigate("/home");

    }catch (error) {   
      console.log(error)
      toast.error(`Erro ao criar usuário e perfil: ${user.name}`);
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
      <p>{profile.estado ? 
      `Estado escolhido: ${profile.estado}`:
       null} </p>
       <p>{profile.cidade ? 
      `Cidade escolhida: ${profile.cidade}`:
       null} </p>

      <p>{profile.team ? 
      `Time escolhido: ${profile.team}`:
       null} </p>


   </div>
   <button
   className="botao"
   onClick={async ()=>{
   registerUser(userData, profileData)}}
   >
   Salvar Perfil
   </button>
   <FormHelperText>
     {"Apenas a informação do perfil não poderá ser alterada."}
     </FormHelperText>
   </div>
 );
} //  postUserData({
    //   userID: user.userID,
    //   name : user.name ,
    //   email : user.email,
    //   perfil : profile.perfil,
    //   team: profile.team ? profile.team : null,
    //   region: profile.region ? profile.region : null,
    //   regionState: profile.regionState ? profile.regionState : null,
    //   características: profile.caracteristica ? profile.caracteristica : null,
    //   posição: profile.posicao  ? profile.posicao  : null,
    //   })
     