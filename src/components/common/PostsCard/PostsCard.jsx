import { useNavigate } from 'react-router-dom';
import './PostsCard.scss'
import LikeButton from '../LikeButton/LikeButton';
import { useMemo, useState } from 'react';
import {getCurrentUser} from '../../../api/FirestoreAPI'
export default function PostsCard({posts,id}) {
  const navigate = useNavigate()
  const emailAtual = localStorage.getItem("userEmail")
  const [currentUser,setCurrentUser] = useState({});

  useMemo(async()=>{
    await getCurrentUser(setCurrentUser,emailAtual)
  },[])

 return (
   <div className='posts-card' 
    key={id}>
   <p className='name-card' 
   onClick={()=> 
       navigate("/Profile",{
       state : {id: posts?.userID, email : posts.userEmail
    }})}>
    {posts.name} </p>
   <p className='timeStamp'>
   {posts.timeStamp} </p>
   <p className='status'>
   {posts.status} </p>
   <LikeButton  userID={currentUser?.userID} postID={posts?.postID} />
   </div>
 );
}