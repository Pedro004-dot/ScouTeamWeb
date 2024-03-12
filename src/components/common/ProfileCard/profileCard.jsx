import { useMemo, useState } from "react";
import "./profileCard.scss"
import {getSingleStatus, getSingleUser} from "../../../api/FirestoreAPI"
import PostsCard from "../PostsCard/PostsCard";
import { useLocation } from "react-router-dom";

export default function ProfileCard({currentUser,onEdit}) {
  const [allStatus,setAllStatus] = useState([])
  const [currentProfile,setCurrentProfile] = useState({})
  const location = useLocation();

  
  useMemo(()=>{
    if (location?.state?.id){
      getSingleStatus(setAllStatus,location?.state?.id);
        }

    if (location?.state?.email){
      getSingleUser(setCurrentProfile,location?.state?.email);
        }
  },[])
  
 return (
  <>
    <div className="profile-card" >
      <div className="edit-btn" >
       <button onClick={onEdit}>Editar</button>
     </div>
     <div className="profile-info" >
     <div>
       <h3 className="userName" >
       {Object.values(currentProfile).length === 0 
       ? currentUser.name
       : currentProfile?.name
       }
       </h3>
       <p className="descricao">
       {Object.values(currentProfile).length === 0 
       ? currentUser.descricao
       : currentProfile?.descricao}
       </p>
       <p className="cidade">
       {Object.values(currentProfile).length === 0 
       ? currentUser.cidade
       : currentProfile?.cidade}
       </p>
     </div>   
      <div className="right-info" >
       <p className="time">
       {Object.values(currentProfile).length === 0 
       ? currentUser.time
       : currentProfile?.time}
       </p>
       <p className="posicao">
       {Object.values(currentProfile).length === 0 
       ? currentUser.posicao
       : currentProfile?.posicao}
       </p>
       </div>
     </div>
      
   </div>
   <div className="post-status-main" >

    {allStatus.map((posts)=>{
        return(
          <div key={posts.id}>
          <PostsCard posts={posts} />
          </div>
        )
      })}
   </div>
   
  </>
   
 );
}
// .filter((item)=>{
//   return item.userEmail === localStorage.getItem('userEmail')
// })