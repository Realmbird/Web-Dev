import './App.css';
import Form_Navbar from './Form-Navbar';
import Form_Title from './Form-Top/Form-Title';
import Intern_Form from './Form 2/Page 3/Intern-Form-3'
import Content from './Content/Content';
const Page_3 = () => {
  return ( 
    <div className="App">
      <Form_Title />
      <Form_Navbar />
      <Intern_Form />
      <Content />
  </div>
   );
}
 
export default Page_3;