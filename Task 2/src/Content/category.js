import {useState} from 'react'
import { Form , Button, Image } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';

const Category = () => {
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
        }
  return ( 
    <Form className = 'category' onSubmit={onFormSubmit}>
            <Form.Group controlId="formCategories">
              <Form.Label className = 'c-title mb-3'>Category</Form.Label>
              <div className = 'c-body'>
              <InputGroup>
              <Form.Control className type="text" placeholder="Search Category" onChange={onInput} 
        value={value} />
              <Button type="submit" variant="outline-dark">
                <Image src = "./images/search-normal.png" className = "search"/>
              </Button>
              </InputGroup>
              <div />
              <div className = 'purple'>
                {array.map(item => (
                    <div className = 'purple-item'>
                    <p className = 'purple-text'>{item}</p>
                    <Image src = "./images/close.png" />
                  </div>
                ))}
              </div>
              </div>
              </Form.Group>
      </Form>
   );
}
 
export default Category;