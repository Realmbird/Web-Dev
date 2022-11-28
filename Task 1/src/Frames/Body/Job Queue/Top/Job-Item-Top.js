import Canidates from './Canidates';
import JobStatus from './Job-Status';
import './Top.css'
const Job_Item_Top = () => {
  return ( 
    <div className = 'top'>
      <Canidates />
      <JobStatus />
    </div>
   );
}
 
export default Job_Item_Top;