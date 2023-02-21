import "./active-item.scss"
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex } from '../../redux/status.js'
import Sub_Active from "./sub-active";
const Active_Item = ({row_data}) => {
  const index = row_data.id
  const sub_list = useSelector((state) => state.status.subcategories).find((sub) => sub.id === index).sub;
  const dispatch = useDispatch()
  const submit_status = useSelector((state) => state.status.submit)[index];
  const active_status = useSelector((state) => state.status.active)[index];
  return ( 
  <div className = "active-item">
    <div className = "body">
        <img src = "./images/dashed-square.png" className = 'bullet' />

        <button className = "active-button"  onClick = {() => dispatch(setActive(index))}>
          <div className = "section-title-form">
            <div className = "content-button">
              <p className = 'text'>
                {row_data.name}
              </p>
              {submit_status && <img className = "check" src = "./images/tick-circle.png" />}
            </div>
            <img className = 'arrow' src = "./images/arrow-right-purple.png" />
          </div>
          <div className = "sub-list">
            {sub_list.map((srow) => (<Sub_Active active_data= {srow} />))}
            <img src = "./images/Assessment-sub.png" />
          </div>
        </button>

      </div>
  </div> 
  );
}
 
export default Active_Item;