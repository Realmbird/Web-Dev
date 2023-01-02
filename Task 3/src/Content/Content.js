import './Content.scss';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Cards/category';
import Description from './Cards/description';
import Location from './Cards/Location'
import { useSelector, useDispatch } from 'react-redux'
import {setIndex} from '../redux/status.js'
import Benefits from './Cards/Benefits';
import IntroJS from './Cards/Intro Video';
import Mentor from './Cards/Mentor';
import Recommended from './Cards/Recommended';
import LinkRes from './Cards/Link';

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
          <Location />
        );
    case 4:
      return(
        <Benefits />
      );
    case 5:
      return(
        <IntroJS />
      );
    case 6:
      return(
        <Mentor />
      );
    case 7:
      return(
        <Recommended />
      );
    case 8:
      return(
        <LinkRes />
      );   
    default:
      return(
        <div className = 'content'>
 
        </div>
      );
  }
}
 
export default Content;