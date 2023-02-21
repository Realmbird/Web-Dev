import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex } from '../../redux/status.js'
const Test = ({row_data}) => {
  const index = row_data.id
  const dispatch = useDispatch()
  const submit_status = useSelector((state) => state.status.submit)[index];
  const active_status = useSelector((state) => state.status.active)[index];
  return (
    <div className = "row">
        <img src = "./images/dashed-square.png" className = 'bullet' />
        <button className = "item" variant="primary" onClick = {() => dispatch(setActive(index))}>
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
 
export default Test;