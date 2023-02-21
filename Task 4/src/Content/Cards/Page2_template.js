import {useState} from 'react'
import { Form , Button, Image } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux'
import { setActive, setSubmit, setIndex, setData } from '../../redux/status.js'

const Page2_template = ({name, number}) => {
  const index = number;
  const dispatch = useDispatch()
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [array, setArray] = useState([]);
  //function
        const onInput = ({target:{value}}) => {
          setValue1(value)
        },
  //function
        onFormSubmit = e => {
          e.preventDefault()
          array.push(value2)
          setValue2()
          dispatch(setSubmit(index))
        }
  return ( 
    <Form className = "sub_template">
      <Form.Group controlId="formOverview">
              <Form.Label className = 'r-title mb-3'>{name}</Form.Label>
              <div className = 'o-body'>
              <InputGroup>
              <Form.Control className type="text" placeholder={name} onChange={onInput} 
        value={value1} />
              
              </InputGroup>
              <Form.Group controlId="formFile" className="mb-3" onChange = {onFormSubmit}>
                <InputGroup className = 'o-group' onClick = {() => document.querySelector(".o-control").click()}>
                  <Form.Control className = 'o-control' type="file" hidden/>
                </InputGroup>
              </Form.Group>
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
 
export default Page2_template;