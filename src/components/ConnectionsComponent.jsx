import "../Sass/ConnectionsComponent.scss"
import { addConnection, getAllUsers } from "../api/FirestoreAPI";
import { useEffect, useState } from "react";
import ConnectedUsers from "./common/ConnectedUsers/ConnectedUsers";
import PropTypes from 'prop-types';
ConnectionsComponent.propTypes = {
    currentUser: PropTypes.object,
    
};
export default function ConnectionsComponent({currentUser}) {
  
  const [users,setUsers] = useState([])


  const getCurrentUser = (id)=>{
    
    addConnection(currentUser.userID, id)
  }

  useEffect(()=>{
    getAllUsers(setUsers)
  },[])

 
 return (

   <div className="connections-main" >

   {users.map((user)=>{
    return  user.id === currentUser.userID ? <></> :
    <div key={user.id} > 
    <ConnectedUsers 
    user={user}
    getCurrentUser={getCurrentUser} 
    currentUser={currentUser}
     /> </div>
   })}
   </div>

 );
}