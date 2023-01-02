import './Content.scss';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './category';
import Description from './description';
import { useSelector, useDispatch } from 'react-redux'
import {setIndex} from '../redux/status.js'

const Content = () => {
  const index = useSelector((state) => state.status.index)
  const dispatch = useDispatch()
  const content = ""
  switch (index){
    case 1: 
      return (
        <Category />
      );
      break;
    case 2:
      return(
        <Description />
      );
    case 3:
        return(
          <div className = 'content'>
            <Card>
            
            </Card>
          </div>
        );
    default:
      return(
        <div className = 'content'>
 
        </div>
      );
  }
}
 
export default Content;