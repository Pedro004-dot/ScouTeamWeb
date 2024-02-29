import PostUpdate from "./common/PostUpdate/PostUpdate";
import "../Sass/HomeComponent.scss"
export default function HomeComponent({currentUser}) {
 return (
   <div className="home-component" >
   <PostUpdate currentUser={currentUser} />
   </div>
 );
}