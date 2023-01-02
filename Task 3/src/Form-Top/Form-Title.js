import { useState } from 'react';
import './Form-Title.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../redux/status.js'
const Form_Title = () => {
  const submit_status = useSelector((state) => state.status.submit);
  const complete = submit_status.every(submit => submit === true);
  if(complete){
    return ( 
      <div className = "title">
        <button className = "back">
          <img src ="./images/Icon + Text.png" className = "icon-text" />
        </button>
        <div className = "center">
          <p>Add New Internship</p>
        </div>
        <button className = "p-continue">
        <img src ="./images/purple next step.png" className = "next-step" />
        </button>
      </div>
    );
  }else{
    return ( 
      <div className = "title">
        <button className = "back">
          <img src ="./images/Icon + Text.png" className = "icon-text" />
        </button>
        <div className = "center">
          <p>Add New Internship</p>
        </div>
        <button className = "continue">
        <img src ="./images/continue-step.png" className = "next-step" />
        </button>
      </div>
    );
  }
}
 
export default Form_Title;