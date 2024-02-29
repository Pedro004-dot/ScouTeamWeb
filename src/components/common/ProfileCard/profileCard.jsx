import "./profileCard.scss"
export default function ProfileCard({currentUser,onEdit}) {

 return (
  <>
    <div className="profile-card" >
   <div className="edit-btn" >
    <button onClick={onEdit}>Editar</button>
   </div>
   <h3 className="userName" >{currentUser.name}</h3>
   <p className="userEmail" >{currentUser.email}</p>
   <p className="userEmail" >{currentUser.cidade}</p>
   </div>
  </>
   
 );
}