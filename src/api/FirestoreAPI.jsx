import { toast } from 'react-toastify';
import { firestore} from '../firebaseConfig';
import { 
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  setDoc,
  deleteDoc,

} from 'firebase/firestore';


let dbRef = collection(firestore, "posts")
let userRef = collection(firestore, "users")
let likeRef = collection(firestore,"likes")
let commenstRef = collection(firestore,"comments")

export const PostStatus = async (object)=>{
    try {
        const response = await addDoc(dbRef, object);
        response ? toast.success("Post adicionado com sucesso:"): null
      } catch (error) {
        error ? toast("Erro ao adicionar post:", error.message): null;

        console.error("Detalhes do erro:", error.errors);
      }
    
        
}

export const getStatus = (setAllStatus)=>{
  onSnapshot(dbRef,(response)=>{
    setAllStatus(response.docs.map((docs)=>{
      return{...docs.data(), id : docs.id}
    }))
  })
}

export const getAllUsers = (setAllUsers)=>{
  try {
    onSnapshot(userRef,(response)=>{
      setAllUsers(response.docs.map((docs)=>{
        return{...docs.data(), id : docs.id}
      }))
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSingleStatus = async (setAllStatus, email) => {
  const singlePostQuery =  query(dbRef ,where("userEmail", "==",email));
  onSnapshot(singlePostQuery, (response)=>{
    setAllStatus(
    response.docs.map((docs)=>{
      return {...docs.data(), id: docs.id};
    })
  );
  });
};

export const postUserData = (credentails)=>{
  addDoc(userRef,credentails)
  .then(()=>{})
  .catch((err)=>console.log(err))
}

export const getCurrentUser = async (setCurrentUser, currEmail)=>{
  try {

    const querySnapshot = await getDocs(userRef);

    const user =  querySnapshot.docs
      .map((doc) => ({
        ...doc.data(),
        userID: doc.id
      }))
      setCurrentUser(user.find((item)=>  item.email && currEmail ? item.email.toLowerCase() == currEmail.toLowerCase(): null))
  
    
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
    setCurrentUser(null);
  } 
};



export const editProdile = async (userID,payLoad)=>{
  let userToEdit = await doc(userRef,userID)

  updateDoc(userToEdit,payLoad)
  .then(()=>{
    toast.success("Alteração feita com sucesso")
  })
  .catch((err)=>{
    console.log(err)
  })
  
}

// export const createProfile = (userID,payLoad)=>{
//   let userToEdit = doc(userRef,userID)

//   updateDoc(userToEdit,payLoad)
//   .then(()=>{
//     toast.success("Perfil salvo com sucesso")
//   })
//   .catch((err)=>{
//     console.log(err)
//   })
  
// }



export const getSingleUser = async (setCurrentUser, email) =>{
  const singleUserQuery = await query(userRef, where("email", "==", email));
  await onSnapshot(singleUserQuery, (response)=>{
    setCurrentUser(
      response.docs.map((docs)=>{
        return {...docs.data(), id: docs.id};
      })[0]
    )
  })

}

export const LikePost = async (userID, postID,liked)=>{
 try {
  let docToLike = await doc(likeRef,`${userID}_${postID}`)
  if(liked){
    await deleteDoc(docToLike)
  }else{
    await setDoc(docToLike,{userID,postID})
  }
  
 } catch (error) {
  console.log(error)
 }
}

export const getLikesByUser = async (userID,postID,setLiked,setLikesCount)=>{
  try {
   let likeQuery = query(likeRef,where("postID","==",postID))

   onSnapshot(likeQuery,(response)=>{
    let likes = response.docs.map((doc)=>doc.data())
    let likesCount = likes.length;

    const isLiked = likes.some((Like)=> Like.userID === userID)

    setLikesCount(likesCount)

    setLiked(isLiked)
    

  })
  } catch (error) {
   console.log(error)
  }
 }

 export const postComment = (postId,comment,timeStamp,name)=>{
  try {
    addDoc(commenstRef,{
      postId,
      comment,
      timeStamp,
      name
    })
  } catch (error) {
    console.log(error)
  }
 }

 export const getComments = (postId,setComments)=>{
  try {
    let singlePostQuery = query(commenstRef, where("postId", "==", postId))

    onSnapshot(singlePostQuery, (response)=>{
      const comments = response.docs.map((doc)=>{
        return{
          id: doc.id,
          ...doc.data(),
        }
      }); 
      setComments(comments)
    })
  } catch (error) {
    console.log(error)
  }
 }

export const updatePost = async (postID,status)=>{
  let docToUpdate = doc(dbRef,postID);
  try {
     await updateDoc(docToUpdate,{status})
     toast.success("Post editado com sucesso")

  } catch (error) {
    toast.error("Não foi possivel editar este post")
    console.log(error)
  }
}
export const deletePost = async (postID)=>{
  let docToDelete = doc(dbRef,postID);
  try {
     await deleteDoc(docToDelete)
     toast.success("Post deletado com sucesso")

  } catch (error) {
    toast.error("Não foi possivel deletar este post")
    console.log(error)
  }
}