import { useState } from "react";
import ProfileCard from "./common/ProfileCard/profileCard";
import ProfileEdit from "./common/ProfileEdit/profileEdit";
import PropTypes from 'prop-types';
ProfileComponent.propTypes = {
  currentUser: PropTypes.object,
  
};

export default function ProfileComponent({currentUser}) {
  const [isEdit,setIsEdit] = useState(false);

  const onEdit = ()=>{
    setIsEdit(!isEdit)
  }
 return (
   <div>
      { isEdit ? 
      <ProfileEdit  onEdit = {onEdit} /> 
      :
      <ProfileCard  currentUser={currentUser} onEdit = {onEdit}
       />}
   </div>
 );
}