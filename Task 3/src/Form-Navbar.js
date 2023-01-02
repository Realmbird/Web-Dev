import { Navbar, Nav } from 'react-bootstrap'
import './Form-Navbar.scss'

const Form_Navbar = () => {
  return ( 
    <Nav className = "nav">
      <Nav.Link className ="description"><img src = "./images/Icon + Text-Description.png" /></Nav.Link>
      <Nav.Link className ="guide"><img src = "./images/Icon + Text-Guide.png" /></Nav.Link>
      <Nav.Link className ="survey"><img src = "./images/Icon + Text-Survey.png" /></Nav.Link>
      <Nav.Link className ="setting"><img src = "./images/Icon + Text-Setting.png" /></Nav.Link>
    </Nav>
   );
}
 
export default Form_Navbar;