import {signInWithEmailAndPassword,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut} from 'firebase/auth'
import { auth } from '../firebaseConfig';

export const LoginAPI = async (email,password)=>{
    try {
      let response =  await signInWithEmailAndPassword(auth,email,password)
      console.log(response)
    } catch (error) {
        alert(error.errors.message)
    }    
};

export const RegisterAPI = async (email,password)=>{
  try {
    let response =  await createUserWithEmailAndPassword(auth,email,password)
    console.log(response)
  } catch (error) {
      alert(error.errors.message)
  }    
};


export const GoogleSignInAPI = async ()=>{
  try {
    let googleProvider =  new GoogleAuthProvider()
   let res = await signInWithPopup(auth,googleProvider)
   return res
  } catch (error) {
      alert(error.errors.message)
  }    
};

export const onLogout = ()=>{
  try {
    signOut(auth)
  } catch (error) {
    return error
  }

}