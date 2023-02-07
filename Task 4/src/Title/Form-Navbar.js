import {  Nav } from 'react-bootstrap'
import './Form-Navbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../redux/status.js'

const Form_Navbar = () => {
  const submit_status = useSelector((state) => state.status.submit);
  const complete = submit_status.every(submit => submit === true);
  if(complete){
    return ( 
      <Nav className = "nav">
        <Nav.Link className ="description"><img src = "./images/Purple Icon + Text.png" /></Nav.Link>
        <Nav.Link className ="guide"><img src = "./images/Icon + Text-Guide.png" /></Nav.Link>
        <Nav.Link className ="survey"><img src = "./images/Icon + Text-Survey.png" /></Nav.Link>
        <Nav.Link className ="setting"><img src = "./images/Icon + Text-Setting.png" /></Nav.Link>
      </Nav>
     );
  }else{
    return ( 
      <Nav className = "nav">
        <Nav.Link className ="description"><img src = "./images/Icon + Text-Description.png" /></Nav.Link>
        <Nav.Link className ="guide"><img src = "./images/Icon + Text-Guide.png" /></Nav.Link>
        <Nav.Link className ="survey"><img src = "./images/Icon + Text-Survey.png" /></Nav.Link>
        <Nav.Link className ="setting"><img src = "./images/Icon + Text-Setting.png" /></Nav.Link>
      </Nav>
     );
  }
}
 
export default Form_Navbar;