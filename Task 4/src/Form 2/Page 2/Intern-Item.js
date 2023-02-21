import { useState } from 'react';
import './Intern-Item.scss';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex } from '../../redux/status.js'
import Active_Item from '../Active-Item/active-item';
const Intern_Item = ({row_data}) => {
  const index = row_data.id
  const dispatch = useDispatch()
  const submit_status = useSelector((state) => state.status.submit)[index];
  const active_status = useSelector((state) => state.status.active)[index];
  if(active_status){
    return ( 
      <Active_Item row_data={row_data} />
     );
  }else{
    return ( 
      <div className = "intern-item">
        <img src = "./images/dashed-square.png" className = 'bullet' />
        <button className = "item" variant="outline-secondary" onClick = {() => dispatch(setActive(index))}>
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