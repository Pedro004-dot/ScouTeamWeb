import { useMemo, useState } from "react";
import { LikePost,getComments,getLikesByUser, postComment } from "../../../api/FirestoreAPI";
import "./LikeButton.scss"
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import {getCurrentTimeStamp} from '../../../helpers/useMoment'
export default function LikeButton({userID, postID}) {

    const [likesCount, setLikesCount]= useState(0)
    const [liked,setLiked]= useState(false)
    const [comment, setComment] = useState('')
    const [comments,setComments] = useState([])
    const [showCommentBox,SetShowCommentBox] = useState(false)

    const getComment = (event)=>{
      setComment(event.target.value)
        
    }

    const addComment = ()=>{
        postComment(postID, comment, getCurrentTimeStamp('LLL'))
        setComment('')
    }
    const handleLike = ()=>{
        LikePost(userID,postID,liked)
    }

    useMemo(()=>{
        getLikesByUser(userID, postID,setLiked,setLikesCount)
        getComments(postID,setComments)
    },[userID,postID])

    const countLike = (count)=> {
        if(count === 1  ){
            return likesCount  + " Pessoa curtiu o post"
        }else if (count > 2){
            return likesCount  + " Pessoas curtiram esse post" 
        }else{
            return null
        }
    }

 return (
   <div className="like-container" >

    <p>{countLike(likesCount)}</p>

    <div className="hr-line" >

        <hr/>

    </div>
    <div className="like-comment" >
        <div className="likes-inner" onClick={handleLike} >

         {liked ?
          <FcLike size={20} />
          : 
          <FcLikePlaceholder size={20}  /> }

          {/* <p className={liked ? "blue" : "black"} >Like</p> */}
          <p>Like</p>

      </div>
      <div className="likes-inner" onClick={()=> {
        showCommentBox ? SetShowCommentBox(false) : SetShowCommentBox(true)
      }} >
       <AiOutlineComment size={22} className={showCommentBox ? "blue" : "black"} />
          
          <p className={showCommentBox ? "blue" : "black"}>Comment</p>

      </div>
    </div>
    {
        showCommentBox ? <>
         <input
          onChange={getComment}
          placeholder="Add a Comment" 
          className="comment-input"
          name="comment"
          value={comment}
          />
         <button className="botao"
          style={{backgroundColor:"#0a66c2",borderRadius:"10px",height:"35px",width:"170px"}}
          onClick={addComment}
           >
           Publicar comentário </button>
          {console.log(comments)}
           {comments.length > 0 ? comments.map((comment)=> {
            return(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>{comment.timeStamp}</p>
                   
                </div>
            )
           }) : <></>}
    </> : null
    }
    
   
   </div>
 );
}