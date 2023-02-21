
import './App.css';
import Content from './Content/Content';
import Intern_Form from './Form-List/Intern-Form';
import Form_Navbar from './Form-Navbar';
import Form_Title from './Form-Top/Form-Title';

function Page_1() {
  return (
    <div className="App">
      <Content />
      <Intern_Form />
      <Form_Title />
      <Form_Navbar />
    </div>
  );
}

export default Page_1;
