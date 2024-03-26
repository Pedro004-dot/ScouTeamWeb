import PostUpdate from "./common/PostUpdate/PostUpdate";
import "../Sass/HomeComponent.scss"
import PropTypes from 'prop-types';
HomeComponent.propTypes = {
    currentUser: PropTypes.func,
    
};
export default function HomeComponent({currentUser}) {
 return (
   <div className="home-component" >
   <PostUpdate currentUser={currentUser} />
   </div>
 );
}