import "./button.scss"
export default function Button({title,onclick}) {
 return (
    <button className="common-btn" onClick={onclick} >{title}</button>
 );
}