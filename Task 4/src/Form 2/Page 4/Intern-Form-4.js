import Intern_Item from "./Intern-Item";
import './Intern-Form.scss';
const Intern_Form = () => {
  const buttons = [{
    "name" : 'Basic Setting',
    "id" : 14
  },{
    "name" : 'Hero Image',
    "id" : 15
  }]
  return ( 
    <div className = "form">
      {buttons.map((button) => (<Intern_Item row_data = {button} />))}
      
    </div>
   );
}
 
export default Intern_Form;