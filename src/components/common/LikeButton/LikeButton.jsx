import { useMemo, useState } from "react";
import { LikePost,getComments,getLikesByUser, postComment } from "../../../api/FirestoreAPI";
import "./LikeButton.scss"
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { AiOutlineComment } from "react-icons/ai";
import {getCurrentTimeStamp} from '../../../helpers/useMoment'
import PropTypes from 'prop-types';

LikeButton.propTypes = {
    userID: PropTypes.number,
    postID: PropTypes.number,
    currentUser: PropTypes.shape({
        userID: PropTypes.string,
        name: PropTypes.string, // Assumindo que 'name' é uma propriedade necessária do objeto currentUser
        // Você pode adicionar outras propriedades necessárias aqui
    }),
};
export default function LikeButton({ postID, currentUser}) {

    const [likesCount, setLikesCount]= useState(0)
    const [liked,setLiked]= useState(false)
    const [comment, setComment] = useState('')
    const [comments,setComments] = useState([])
    const [showCommentBox,SetShowCommentBox] = useState(false)

    const getComment = (event)=>{
      setComment(event.target.value)
        
    }

    const addComment = ()=>{
        postComment(postID, comment, getCurrentTimeStamp('LLL'), currentUser?.name)
        setComment('')
    }
    const handleLike = ()=>{
        LikePost(currentUser.userID,postID,liked)
    }

    useMemo(()=>{
        getLikesByUser(currentUser.userID, postID,setLiked,setLikesCount)
        getComments(postID,setComments)
    },[currentUser.userID,postID])

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
       <AiOutlineComment
        size={22}
        className={showCommentBox ? "blue" : "black"} />
          
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
           {comments.length > 0 ? comments.map((comment)=> {
            return(
                <div 
                className="all-comments"
                key={comment.id}>
                    <p className="comment-name" >{comment.name}</p>
                    <p className="comment">{comment.comment}</p>
                    
                    <p className="time-stamp">{comment.timeStamp}</p>
                   
                </div>
            )
           }) : <></>}
    </> : null
    }
    
   
   </div>
 );
}