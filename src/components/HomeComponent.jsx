import PostUpdate from "./common/PostUpdate/PostUpdate";
import PropTypes from 'prop-types';
HomeComponent.propTypes = {
    currentUser: PropTypes.object,
    
};
export default function HomeComponent({currentUser}) {
 return (
   <div className="home-component" >
   <PostUpdate currentUser={currentUser} />
   </div>
 );
}