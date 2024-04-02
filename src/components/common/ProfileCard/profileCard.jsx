import { useEffect, useState } from "react";
import "./profileCard.scss"
import {  getSingleStatus, getSingleUser} from "../../../api/FirestoreAPI"
import PostsCard from "../PostsCard/PostsCard";

import { useLocation } from "react-router-dom";
import { uploadImage as uploadImageAPI} from "../../../api/ImageUpload"
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import FileUploadModal from "../FileUploadModal/FileUploadModal";
ProfileCard.propTypes = {
    onEdit: PropTypes.func,
    
};

export default function ProfileCard({onEdit}) {
  const {user} = useSelector((rootReducer)=> rootReducer.user)
  let location = useLocation();
  const [allStatus,setAllStatus] = useState([])
  const [currentProfile,setCurrentProfile] = useState({})
  const [currentImage, setCurrentImage] = useState({})
  const [progress,setProgress] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  const getImage = (image)=>{
    setCurrentImage(image.target.files[0])
  }
  const uploadImage = async ()=>{
    await uploadImageAPI(
      currentImage,
      user?.userID,
      setModalOpen,
      setProgress,
      setCurrentImage,
      )}
  

  useEffect(() => {
    if (location?.state?.email ) {
      getSingleStatus(setAllStatus, location?.state?.email);
    }else{
      let email = localStorage.getItem('userEmail')
      getSingleStatus(setAllStatus, email);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }else{
      let email = localStorage.getItem('userEmail')
      getSingleUser(setCurrentProfile, email);
    }

  }, []);
  
 return (
  <>
  <FileUploadModal 
   modalOpen={modalOpen} 
   setModalOpen={setModalOpen}
   uploadImage={uploadImage} 
   getImage={getImage}
   currentImage={currentImage}
   progress={progress}
   setProgress={setProgress}
   />
    <div className="profile-card" >
    
      <div className="edit-btn" >
       <button onClick={onEdit}>Editar</button>
     </div>
     
     <div className="profile-info" >
     <div>
     {currentProfile?.imageLink === undefined 
     ? (<div>
      <label 
      className="label-addImage"
      onClick={()=>setModalOpen(true)} >
       Adicionar Imagem
       </label>
         
     </div>)
       : ( <img
      className="profile-image"
      src={currentProfile?.imageLink }
      onClick={()=>setModalOpen(true)}
      alt="imagem-perfil"
      />)}
    

       <h3 className="userName" >
       {currentProfile.length === 0 
       ? null : 
       currentProfile.name}
       </h3>

       <p className="descricao">
       {currentProfile.length === 0 
       ? null 
       : currentProfile.descricao}
       </p>

       <p className="cidade">
       {currentProfile.length === 0
       ? null 
       : currentProfile.regionState}
       </p>

     </div>   
      <div className="right-info" >

       <p className="time">
       {currentProfile.length === 0 
       ? null 
       : currentProfile.team}
       </p>

       <p className="perfil">
       {currentProfile.length === 0
        ? null 
        : currentProfile.perfil}
       </p>

       <p className="posicao">
       {currentProfile.length === 0
        ? null
        : currentProfile.posicao}
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