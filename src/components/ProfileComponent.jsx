import { useState } from "react";
import ProfileCard from "./common/ProfileCard/profileCard";
import ProfileEdit from "./common/ProfileEdit/profileEdit";

export default function ProfileComponent({currentUser}) {
  const [isEdit,setIsEdit] = useState(false);

  const onEdit = ()=>{
    setIsEdit(!isEdit)
  }
 return (
   <div>
      { isEdit ? 
      <ProfileEdit currentUser={currentUser} onEdit = {onEdit} /> 
      :
      <ProfileCard currentUser={currentUser} onEdit = {onEdit}
       />}
   </div>
 );
}