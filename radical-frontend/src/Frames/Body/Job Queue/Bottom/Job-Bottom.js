import Important_text from './Important-job-text';
import './Job-Bottom.css'
import Publish from './Publish';
const Job_Bottom = () => {
  return ( 
    <div className = 'bottom'>
      <Publish />
      <Important_text />
    </div>
   );
}
 
export default Job_Bottom;