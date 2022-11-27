import JobItem from "./JobItem";
const JobQueue = () => {
  return ( 
    <div className = 'job-queue'>
      <h2 className = 'queue-title'>
        Job Queue
      </h2>
      <JobItem id = '1'/>
      <JobItem id = '2'/>
      <JobItem id = '3'/>
    </div>
   );
}
 
export default JobQueue;