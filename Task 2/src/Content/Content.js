import './Content.scss';
import { Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './category';
import Description from './description';

const Content = () => {
  const form = ""
  switch (form){
    case 'category': 
      return (
        <Category />
      );
      break;
    case 'description':
      return(
        <Description />
      );
    case 'location':
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