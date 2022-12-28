import { useState } from 'react';
import './Form-Title.scss'
const Form_Title = () => {
  //for future use task 3
  const [form_complete,set_form_complete] = useState(false);
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
 
export default Form_Title;