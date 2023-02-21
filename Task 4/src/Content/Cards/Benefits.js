import { Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const Benefits = () => {
  const index = 4;
  const dispatch = useDispatch()
  const onFormSubmit = e => {
    e.preventDefault()
    dispatch(setSubmit(index))
  }
  return ( 
      <Form className= "content-description" onSubmit={onFormSubmit}>
        <Form.Label className = 'd-title'>Benefits</Form.Label>
        <Form.Control type="text" placeholder="Description" className = "large-text" />
      </Form>

   );
}
 
export default Benefits;