import { useState } from 'react';
import './Intern-Item.scss';
const Intern_Item = ({row_data}) => {
  const [submit_status, setSubmit] = useState(false);
  const [active_status, setActive] = useState(false);
  if(active_status){
    return ( 
      <div className = "row">
        <img src = "./images/dashed-square.png" className = 'bullet' />
        <button className = "item-active"  onClick = {null}>
          <div className = "content-button">
            <p className = 'text'>
              {row_data.name}
            </p>
            {submit_status && <img className = "check" src = "./images/tick-circle.png" />}
          </div>
          <img className = 'arrow' src = "./images/arrow-right-purple.png" />
        </button>
      </div>
     );
  }else{
    return ( 
      <div className = "row">
        <img src = "./images/dashed-square.png" className = 'bullet' />
        <button className = "item" variant="outline-secondary" onClick = {null}>
          <div className = "content-button">
            <p className = 'text'>
              {row_data.name}
            </p>
            {submit_status && <img className = "check" src = "./images/tick-circle.png" />}
          </div>
          <img className = 'arrow' src = "./images/arrow-right-white.png" />
        </button>
      </div>
     );
  }
  
}
 
export default Intern_Item;