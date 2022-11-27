import './BoxTemplate.css'
const Box = ({box}) => {
  return (
    <div className = 'both'>
      <div className = 'box'>
      <h2 className = 'num'>{ box.number }</h2>
      <p className = 'title'>{ box.title }</p>
      {box.bar && <img src = "./images/Vector 11.png" className = 'bar' />}
    </div>

    </div> 
    
    
   );
}
 
export default Box;