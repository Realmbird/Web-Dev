import { Form, Image } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const LinkRes = () => {
  const index = 8;
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(setSubmit(index))
  }
  return ( 
  <Form className = "link" onSubmit={onFormSubmit}>
    <Form.Label className = 'l-title'>Web Links and Resources</Form.Label>
    <Form.Control className = "l-text" type="text" placeholder="Add URL" />
    <Image src = "./images/Profession Pills.png" />
  </Form> 
  );
}
 
export default LinkRes;