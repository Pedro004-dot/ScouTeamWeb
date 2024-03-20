import { useMemo, useState } from "react";
import { LikePost,getLikesByUser } from "../../../api/FirestoreAPI";
import "./LikeButton.scss"
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
export default function LikeButton({userID, postID}) {

    const [likesCount, setLikesCount]= useState(0)
    const [liked,setLiked]= useState(false)


    const handleLike = ()=>{
        LikePost(userID,postID,liked)
    }

    useMemo(()=>{
        getLikesByUser(userID, postID,setLiked,setLikesCount)
    },[userID,postID])

    

 return (
   <div className="like-container" >
    {likesCount}
   {/* <AiOutlineLike size={30} onClick={handleLike} /> */}
   {liked ? <FcLike size={20} onClick={handleLike} /> : <FcLikePlaceholder size={20} onClick={handleLike} /> }
  
   </div>
 );
}