
import { PostStatus, getStatus} from "../../../api/FirestoreAPI";
import getUniqueID from "../../../helpers/getUniqueID";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import ModalComponent from "../Modal/Modal";
import PostsCard from "../PostsCard/PostsCard";
import "./PostUpdate.scss"
import { useState, useMemo} from "react";




export default function PostUpdate({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status,setStatus] = useState('')
  const [allStatus,setAllStatus] = useState([])

  let userEmail = localStorage.getItem('userEmail')

  const sendStatus= async ()=>{
    let object = {
      status : status,
      timeStamp : getCurrentTimeStamp("LLL"),
      userEmail : currentUser.email,
      name: currentUser.name,
      postID: getUniqueID()
  }
   await PostStatus(object)
   await setModalOpen(false)
   await setStatus("")
  }
  useMemo(()=>{
    getStatus(setAllStatus)
   
  },[])
  
 return (
   <div className="post-status-main" >
     <div className="post-status" >
      <button className="open-post-modal" onClick={()=> setModalOpen(true)} >
      Start a post </button>
    </div>
    <ModalComponent status={status} setStatus={setStatus} modalOpen={modalOpen} setModalOpen={setModalOpen} sendStatus ={sendStatus}/>
      <div >
      {allStatus.map((posts)=>{
        return(
          <div key={posts.id}>
          <PostsCard posts={posts} />
          </div>
        )
      })}
      </div>
   </div>
  
 );
}