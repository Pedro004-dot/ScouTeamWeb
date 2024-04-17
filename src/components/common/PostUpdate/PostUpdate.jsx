
import { PostStatus, getStatus,updatePost,deletePost} from "../../../api/FirestoreAPI";
import getUniqueID from "../../../helpers/getUniqueID";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import ModalComponent from "../Modal/Modal";
import PostsCard from "../PostsCard/PostsCard";
import "./PostUpdate.scss"
import { useState, useMemo} from "react";


import PropTypes from 'prop-types';

PostUpdate.propTypes = {
    currentUser : PropTypes.object
};

export default function PostUpdate({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus] = useState('')
  const [allStatus,setAllStatus] = useState([])
  const [isEdit,setIsEdit] = useState(false)
  const [currentPost, setCurrentPost] = useState({})
 

 

  // let userEmail = localStorage.getItem('userEmail')
  const getEditData = (posts)=>{
    setModalOpen(true)
    setStatus(posts?.status)
    setCurrentPost(posts)
    setIsEdit(true)
  }
  const updateStatus = ()=>{
    updatePost(currentPost.id, status)
    setModalOpen(false)
    setStatus("")
  }

  const deleteStatus = (posts)=>{
    deletePost(posts.id)
  }

  const sendStatus= async ()=>{
    let object = {
      status : status,
      timeStamp : getCurrentTimeStamp("LLL"),
      userID : currentUser.userID,
      userEmail : currentUser.email,
      name: currentUser.name,
      postID: getUniqueID()
  }
   await PostStatus(object)
   await setModalOpen(false)
   await setStatus("")
   setIsEdit(false)
  }
  useMemo(()=>{
    getStatus(setAllStatus)
  },[])


 

  const handleResumeProfile = (perfil)=>{
    if(perfil == "Atleta" || perfil == "Treinador"){
      return ` do ${currentUser.team}`
    }
  }
 return (
   <div className="post-status-main" >

    <div className="user-details">

    <img src={currentUser.imageLink} alt="imagem-perfil"/>
     <p className="name-profile" >{currentUser.name}</p>
     <p className="headline-profile" >{currentUser.perfil}{handleResumeProfile(currentUser.perfil)}</p>
    </div>

     <div className="post-status" >

     <img className="post-image" 
     src={currentUser.imageLink}
      alt="imagem-perfil"/>

      <button 
      className="open-post-modal"
       onClick={()=> {
        setModalOpen(true)
        setIsEdit(false)

        }} >
      Publicar </button>
    </div>
    <ModalComponent
     status={status} 
     setStatus={setStatus}
     modalOpen={modalOpen} 
     setModalOpen={setModalOpen}
     sendStatus ={sendStatus}
     isEdit={isEdit}
     updateStatus={updateStatus} 
     
     />
      <div >
      {allStatus.map((posts)=>{
        return(
          <div key={posts.id}>
          <PostsCard 
           posts={posts}
           getEditData={getEditData} 
           deleteStatus={deleteStatus}

           />
          </div>
        )
      })}
      </div>
   </div>
  
 );
}