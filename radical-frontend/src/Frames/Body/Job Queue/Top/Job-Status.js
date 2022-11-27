import './Job-Status.css'
const JobStatus = () => {
  return ( 
    <div className = 'job-status'>
      <button className = 'view-insights'>
        <p>View Insights</p>
      </button>
      <button className = 'view-canidates'>
        <p>View Candidates</p>
      </button>
      <img src = './images/more-2.png' />
    </div>
   );
}
 
export default JobStatus;