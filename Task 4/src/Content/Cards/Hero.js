
import {useState} from 'react'
import { Form , Button, Image, FormGroup } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const Hero = () => {
  const index = 15;
  const dispatch = useDispatch()
  const [value, setValue] = useState();
  const [array, setArray] = useState([]);
  //function
        const onInput = ({target:{value}}) => {
          setValue(value)
        },
  //function
        onFormSubmit = e => {
          e.preventDefault()
          array.push(value)
          setValue()
          dispatch(setSubmit(index))
        }
  return ( 
    <Form className= "content-basic" onSubmit={onFormSubmit}>
      <Form.Group className = "part-one">
      <Form.Label className = 'b-title'>Internship URL</Form.Label>
        <Form.Control type="text" placeholder="radicalx-internship-url" className = "large-text" />
        </Form.Group>
        <FormGroup className= "access">
          <Form.Label className = "a-title">Access</Form.Label>

          <Form.Check aria-label="option 1" label = "Private Internship" />
          <Form.Check aria-label="option 1" label = "Hidden Internship" />

        </FormGroup>
        <FormGroup className= "security">
            <Form.Label className = "s-title">Security</Form.Label>

            <Form.Check aria-label="option 1" label = "Disable Text Copying"/>

        </FormGroup>
      </Form>
   );
}
 
export default Hero;