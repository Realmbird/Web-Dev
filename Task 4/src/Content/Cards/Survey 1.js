import {useState} from 'react'
import { Form , Button, Image } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'
const Survey_1 = () => {
  const index = 12;
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
    <Form className = 'category' onSubmit={onFormSubmit}>
            <Form.Group controlId="formCategories">
              <Form.Label className = 'r-title mb-3'>Survey 1</Form.Label>
              <div className = 'c-body'>
              <InputGroup>
              <Form.Control className type="text" placeholder="Question" onChange={onInput} 
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
 
export default Survey_1;