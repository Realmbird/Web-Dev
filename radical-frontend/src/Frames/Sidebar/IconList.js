import './icon.css'
const IconList = ({icons}) => {
  return ( 
    <div className = 'icon-list'>
      {icons.map((icon) => (
        <div className = 'icon' key = {icon.text}>
          <img className = 'picture' src = {icon.image} />
          <p className = 'text'>{ icon.text }</p> 
        </div>
      ))}
    </div>
   );
}
 
export default IconList;