import { toast } from 'react-toastify';
import { firestore} from '../firebaseConfig';
import { addDoc,collection,onSnapshot} from 'firebase/firestore';

let dbRef = collection(firestore, "posts")
let userRef = collection(firestore, "users")

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

export const postUserData = (credentails)=>{
  addDoc(userRef,credentails).then(()=>{}).catch((err)=>console.log(err))
}

export const getCurrentUser = (setCurrentUser)=>{

  const currEmail = localStorage.getItem('userEmail') 

  onSnapshot(userRef,(response)=>{
    setCurrentUser(response.docs.map((docs)=>{
      return{...docs.data()}
    }).filter((item)=>{
    return item.email === currEmail
    })[0]
    )
  })

  // onSnapshot(userRef,(response)=>{
  //   setCurrentUser(response.docs.map((docs)=>{
  //     return{...docs.data(), userID : docs.id}
  //   }).filter((item)=> {
  //     return item.email === currEmail
  //   })[0]
  //   )
  // })
}