import { Form, Image, InputGroup, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const Mentor = () => {
  const index = 6;
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(setSubmit(index))
  }
  return ( 
    <Form className = "mentor" onChange={onFormSubmit}>
     
      <Form.Label className = 'm-title'>Mentor Details</Form.Label>
      <InputGroup className = 'm-group' onClick = {() => document.querySelector(".m-control").click()}>
          <Form.Control className = 'm-control' type="file"  hidden/>
      </InputGroup>
      <Form.Control className = "m-name" type="text" placeholder="Name" />
      <Form.Control className = "m-email" type="email" placeholder="Email Address" />

      <Form.Control className = "m-link" type="link" placeholder="LinkedIn URL(optional)" />
        
    </Form>
   );
}
 
export default Mentor;