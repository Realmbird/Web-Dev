import './BoxTemplate.css'
const Box = ({box}) => {
  return (
    <div className = 'both-box'>
       <div className = 'box'>
      <h2 className = 'box-num'>{ box.number }</h2>
      <p className = 'box-title'>{ box.title }</p>
    </div>
      {box.bar && <img src = './images/Vector 11.png' className = 'bar' />}
    </div>
    

    
    
   );
}
 
export default Box;