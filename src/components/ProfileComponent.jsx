import { useState } from "react";
import ProfileCard from "./common/ProfileCard/profileCard";
import ProfileEdit from "./common/ProfileEdit/profileEdit";

export default function ProfileComponent() {
  const [isEdit,setIsEdit] = useState(false);

  const onEdit = ()=>{
    setIsEdit(!isEdit)
  }
 return (
   <div>
      { isEdit ? 
      <ProfileEdit  onEdit = {onEdit} /> 
      :
      <ProfileCard  onEdit = {onEdit}
       />}
   </div>
 );
}