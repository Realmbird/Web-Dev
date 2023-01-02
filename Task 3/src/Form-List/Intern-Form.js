import Intern_Item from "./Intern-Item";
import './Intern-Form.scss';
const Intern_Form = () => {
  const buttons = [{
    "name" : 'Category',
    "id" : 1
  },{
    "name" : 'Description',
    "id" : 2
  },{
    "name" : 'Location',
    "id" : 3
  },{
    "name" : 'Benefits',
    "id" : 4
  },{
    "name" : 'Intro Video',
    "id" : 5
  },{
    "name" : 'Mentor Details',
    "id" : 6
  },{
    "name" : 'Recommended Roles',
    "id" : 7
  },{
    "name" : 'Web Links & Resources',
    "id" : 8
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