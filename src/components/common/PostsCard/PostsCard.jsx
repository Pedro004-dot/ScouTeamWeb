import { useNavigate } from 'react-router-dom';
import './PostsCard.scss'
import LikeButton from '../LikeButton/LikeButton';
import { useMemo, useState } from 'react';
import {getAllUsers, getCurrentUser} from '../../../api/FirestoreAPI'
import PropTypes from 'prop-types';
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";

PostsCard.propTypes = {
    id: PropTypes.number,
    getEditData: PropTypes.func,
    deleteStatus:PropTypes.func,
    posts: PropTypes.shape({
      userEmail: PropTypes.string,
      userID: PropTypes.string,
      postID: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string,
      timeStamp: PropTypes.string,
      
    }),
};

export default function PostsCard({posts,id,getEditData,deleteStatus}) {
  const navigate = useNavigate()
  const emailAtual = localStorage.getItem("userEmail")
  const [currentUser,setCurrentUser] = useState({});
  const [allUsers,setAllUsers] = useState([])

   

  useMemo(async()=>{
    await getCurrentUser(setCurrentUser,emailAtual)
    await getAllUsers(setAllUsers)
  },[])
  
 return (
  <div className='posts-card'  key={id}>
    <div className='post-image-wrapper'>
    { posts.userID === currentUser.userID ?
      ( <div className='action-container' >
          <MdOutlineModeEdit size={20} className='action-icon' onClick={()=>getEditData(posts)} />
          <MdOutlineDelete size={20}  className='action-icon' onClick={()=> deleteStatus(posts)}/>
        </div> ):null
    }
       
          <img
          alt='profile-image'
          className='post-image'
          src={allUsers.filter((item)=> item.id === posts.userID).map((item)=> item.imageLink)[0]}
         />
        <div className='head-post-card'>
              <p className='name-card' 
          onClick={()=> 
              navigate("/Profile",{
              state : {id: posts?.userID, email : posts.userEmail
            }})}>
            {posts.name} </p>
          <p className='timeStamp'>
          {posts.timeStamp} </p>
       </div>
     </div>
   
   
   <p className='status'>
   {posts.status} </p>
   <LikeButton  userID={currentUser?.userID} postID={posts?.postID}  currentUser={currentUser}/>
  </div>
 );
}