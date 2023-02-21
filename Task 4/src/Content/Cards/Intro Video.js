import { Form } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const IntroJS = () => {
  const index = 5;
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(setSubmit(index))
  }
  return ( 
    <Form className = 'file'>
      <Form.Group controlId="formFile" className="mb-3" onChange = {onFormSubmit}>
        <Form.Label className = 'f-title'>Intro Video </Form.Label>
        <InputGroup className = 'f-group' onClick = {() => document.querySelector(".f-control").click()}>
          <Form.Control className = 'f-control' type="file" hidden/>
        </InputGroup>
      </Form.Group>
    </Form>
   );
}
 
export default IntroJS;