import { Form, Image } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const Location = () => {
  const index = 3;
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(setSubmit(index))
  }
  return ( 
      <Form className= "content-location" onChange={onFormSubmit}>
        <Form.Label className = 'l-title'>Location</Form.Label>
        <Form.Select className = "l-drop" aria-label="Default select example">
          <option className = 'l-search'>Select Location</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form>

   );
}
 
export default Location;