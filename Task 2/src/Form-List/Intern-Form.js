import Intern_Item from "./Intern-Item";
import './Intern-Form.scss';
const Intern_Form = () => {
  const buttons = [{
    "name" : 'Category'
  },{
    "name" : 'Description'
  },{
    "name" : 'Location'
  },{
    "name" : 'Benefits'
  },{
    "name" : 'Intro Video'
  },{
    "name" : 'Mentor Details'
  },{
    "name" : 'Recommended Roles'
  },{
    "name" : 'Web Links & Resources'
  }]
  return ( 
    <div className = "form">
      {buttons.map((button) => (<Intern_Item row_data = {button} />))}
      <div className = 'Assessment'>
        <img src = "./images/add-more.png" className = "add-more"/>
      </div>
    </div>
   );
}
 
export default Intern_Form;