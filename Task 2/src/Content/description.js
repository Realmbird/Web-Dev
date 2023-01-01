import { Form } from 'react-bootstrap'
const Description = () => {
  return ( 
      <Form className= "content-description">
        <Form.Label className = 'd-title'>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" className = "large-text" />
      </Form>

   );
}
 
export default Description;