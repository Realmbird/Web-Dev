import thisTime from './thisTime'
import chooseTime from './chooseTime'
import './Time.css'
const Time = () => {
  return ( 
    <div className = 'time'>
      <div className = 'time-content'>
      <thisTime />
      <chooseTime />
      </div>
    </div>
   );
}
 
export default Time;