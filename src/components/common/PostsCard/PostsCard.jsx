import { useNavigate } from 'react-router-dom';
import './PostsCard.scss'
export default function PostsCard({posts,id}) {
  const navigate = useNavigate()
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
   </div>
 );
}