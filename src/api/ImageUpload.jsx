import { storage } from "../firebaseConfig";
import {ref, getDownloadURL,uploadBytesResumable} from "firebase/storage"
import { editProdile } from "./FirestoreAPI";


export const uploadImage = (
    file,
    id,
    setModalOpen,
    setProgress,
    setCurrentImage
    )=>{
    const profilePicsRef = ref(storage,`profileImages/${file.name}`)
    const uploadTask = uploadBytesResumable( profilePicsRef,file)

    uploadTask.on(
    'state_changed', 
    (snapshot)=>{
       const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress)
            
    },(error)=>{
        console.log(error)
    },
    ()=>{
        getDownloadURL(uploadTask.snapshot.ref)
        .then((response)=>{
            editProdile(id,{imageLink : response}) 
            setModalOpen(false)
            setProgress(0)
            setCurrentImage({})
        })
    })


}