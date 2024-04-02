import "./button.scss"
import PropTypes from 'prop-types';

Button.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func,
};
export default function Button({title,onclick}) {
 return (
    <button 
    className="common-btn" 
    onClick={onclick} >
    {title}
    </button>
 );
}