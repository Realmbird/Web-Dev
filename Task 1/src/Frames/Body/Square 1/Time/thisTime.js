import './thisTime.css'
const thisTime = () => {
  return ( 
    <div className = 'setTime'>
      <button className = 'setWeek'>
        <p className = 'weekText'>
          This Week
        </p>
      </button>
      <button className = 'setMonth'>
        <p className = 'monthText'>
          This Month
        </p>
      </button>
    </div>
   );
}
 
export default thisTime;