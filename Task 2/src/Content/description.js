import { Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../redux/status.js'
const Description = () => {
  const index = 2;
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(setSubmit(index))
  }
  return ( 
      <Form className= "content-description" onSubmit={onFormSubmit}>
        <Form.Label className = 'd-title'>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" className = "large-text" />
      </Form>

   );
}
 
export default Description;