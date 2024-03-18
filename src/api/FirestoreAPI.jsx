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

} from 'firebase/firestore';
import { useMemo } from 'react';

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
export const getSingleStatus = async (setAllStatus, id) => {
  const singlePostQuery =  query(dbRef ,where("userID", "==",id));
  onSnapshot(singlePostQuery, (response)=>{
    setAllStatus(
    response.docs.map((docs)=>{
      return {...docs.data(), id: docs.id};
    })
  );
  });
};
export const postUserData = (credentails)=>{
  addDoc(userRef,credentails).then(()=>{}).catch((err)=>console.log(err))
}

export const getCurrentUser = async (setCurrentUser, currEmail)=>{
  try {
    
    let userRef = collection(firestore, "users")

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