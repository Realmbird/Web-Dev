import { Navbar, Nav } from 'react-bootstrap'
import './Form-Navbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from './redux/status.js'

const Form_Navbar = () => {
  const submit_status = useSelector((state) => state.status.submit);
  const complete_1 = submit_status.slice(0,9).every(submit => submit === true);
  const complete_2 = submit_status.slice(9,12).every(submit => submit === true);
  const complete_3 = submit_status.slice(12, 14).every(submit => submit === true);
  const complete_4 = submit_status.slice(14, 16).every(submit => submit === true);
  return ( 
    <Nav className = "nav">
      <Nav.Link className ="description"><img src = {complete_1 ? "./images/Purple Icon + Text.png" : "./images/Icon + Text-Description.png"} /></Nav.Link>
      <Nav.Link className = {!complete_1 ? "guide": "description"}><img src = {!complete_1 ? "./images/Icon + Text-Guide.png" : (!complete_2 ? "./images/guide black.png" : "./images/Purple Guide.png")} /></Nav.Link>
      <Nav.Link className ={!complete_2 ? "description":"survey"}><img src = {!complete_3 ? "./images/Icon + Text-Survey.png" : "./images/purple survey.png" } /></Nav.Link>
      <Nav.Link className = {!complete_3 ? "description":"setting"}><img src = "./images/Icon + Text-Setting.png" /></Nav.Link>
    </Nav>
   );
}
 
export default Form_Navbar;