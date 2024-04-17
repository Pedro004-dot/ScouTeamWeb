import PropTypes from 'prop-types';
import { getConnections } from '../../../api/FirestoreAPI';
import { useEffect, useState } from 'react';
import { MdPersonAddAlt1 } from "react-icons/md";

ConnectedUsers.propTypes = {
    user: PropTypes.object,
    getCurrentUser: PropTypes.func,
    currentUser : PropTypes.shape({
      userID: PropTypes.string,
    })
};
export default function ConnectedUsers({user, getCurrentUser,currentUser}) {
  const [isConnected,setIsConnected] = useState(false)
  useEffect(()=>{
    getConnections(currentUser.userID, user.id, setIsConnected)
  },[currentUser.userID, user.id])


 return isConnected ? <> </>:(
   <div className='grid-child' >
   <img src={user.imageLink} />
   <p className='name-connection' >{user.name}</p>
   <p className='headline-connection' >{user.perfil}</p>


   <button 
   onClick={()=> getCurrentUser(user.id)} 
   className='botao' 
   style={{backgroundColor:"white", color:"#f44336", border:"1px solid #f44336"}} >
   <MdPersonAddAlt1 size={18} style={{color:"#f44336", marginRight:"5px"}} />
   Conectar
   </button>
   </div>
 );
}