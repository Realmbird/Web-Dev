import User from './Sidebar/User'
import Navbar from './Sidebar/Navbar'
import './Sidebar.css'
const Sidebar = () => {
  return ( 
    <div className = 'side'>
      <Navbar />
      <User />
    </div>
   );
}
 
export default Sidebar;