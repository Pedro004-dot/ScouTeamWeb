import { storage } from "../firebaseConfig";
import {ref, getDownloadURL,uploadBytesResumable} from "firebase/storage"
import { editProdile } from "./FirestoreAPI";


export const uploadImage = (file,id)=>{
    const profilePicsRef = ref(storage,`profileImages/${file.name}`)
    const uploadTask = uploadBytesResumable( profilePicsRef,file)

    uploadTask.on(
    'state_changed', 
    (snapshot)=>{
       Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            
    },(error)=>{
        console.log(error)
    },
    ()=>{
        getDownloadURL(uploadTask.snapshot.ref)
        .then((response)=>{
            editProdile(id,{imageLink : response}) 
        })
    })


}