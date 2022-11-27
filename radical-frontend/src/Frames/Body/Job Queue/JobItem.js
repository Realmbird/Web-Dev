import Job_Bottom from "./Bottom/Job-Bottom";
import Job_Middle from "./Middle/Job-Middle";
import Job_Item_Top from "./Top/Job-Item-Top";
import './JobItem.css'
const JobItem = ({id}) => {
  return ( 
    <div className = 'job-item' key = {id}>
      <Job_Item_Top />
      <Job_Middle />
      <Job_Bottom />
    </div>
   );
}
 
export default JobItem;