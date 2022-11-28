import Box from "./BoxTemplate";
import './Job-Middle.css'
const Job_Middle = () => {
  const boxes = [{
    "number": '4',
    "title": 'Sourced',
    "bar": true
  },{
    "number": '23',
    "title": 'Applied',
    "bar": true
  },{
    "number": '18',
    "title": 'Photo Screen',
    "bar": true
  }, {
    "number": '10',
    "title": 'Assessment',
    "bar": true
  },{
    "number": '5',
    "title": 'Interview',
    "bar": true
  },{
    "number": '1',
    "title": 'Offer',
    "bar": true
  },{
    "number": '1',
    "title": 'Hired',
    "bar": false
  }]
  return (
    <div className = 'boxes'>
      {boxes.map((part) => (
      <Box box = {part}/>
      ))}
    </div> 
   );
}
 
export default Job_Middle;