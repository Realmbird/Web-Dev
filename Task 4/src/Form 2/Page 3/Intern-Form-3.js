import Intern_Item from "./Intern-Item";
import './Intern-Form.scss';
const Intern_Form = () => {
  const buttons = [{
    "name" : 'Survey 1',
    "id" : 12
  },{
    "name" : 'Survey 2',
    "id" : 13
  }]
  return ( 
    <div className = "form">
      {buttons.map((button) => (<Intern_Item row_data = {button} />))}
      <img src = "./images/add survey.png" className = "add-more"/>
    </div>
   );
}
 
export default Intern_Form;