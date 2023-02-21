import Intern_Item from "./Intern-Item";
import './Intern-Form.scss';
const Intern_Form = () => {
  const buttons = [{
    "name" : 'Overview',
    "id" : 9
  },{
    "name" : 'Schedule',
    "id" : 10
  },{
    "name" : 'Resources',
    "id" : 11
  }]
  return ( 
    <div className = "form">
      {buttons.map((button) => (<Intern_Item row_data = {button} />))}
      <img src = "./images/Assessment.png" className = "add-more"/>
    </div>
   );
}
 
export default Intern_Form;