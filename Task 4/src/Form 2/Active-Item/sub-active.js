import './sub-active.scss'
const Sub_Active = ({active_data}) => {
  return ( 
    <div className = "sub-active">
      <img src = "./images/menu.png" className="three-lines" />
      <p className = "sub-text">{active_data}</p>
    </div>
   );
}
 
export default Sub_Active;