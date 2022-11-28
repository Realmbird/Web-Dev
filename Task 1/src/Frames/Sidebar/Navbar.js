import './Navbar.css'
import './IconList'
import IconList from './IconList';
const Navbar = () => {
  const data = [{
    "text": "Dashboard",
    "image": "./images/Property 1=broken.png"
  },{
    "text": "Apprenterships",
    "image": "./images/medal-star.png"
  },{
    "text": "Internships",
    "image": "./images/book.png"
  },{
    "text": "Jobs",
    "image": "./images/briefcase.png"
  },{
    "text": "Settings",
    "image": "./images/setting-2.png"
  }]
  return ( 
    <div className = 'nav'>
      <img src = './images/RadicallX-Black-Logo-1.png' className = 'logo' alt = 'Radical X'/>
      <div className = 'links'>
        <IconList icons = {data} />
      </div>
    </div>
   );
}
 
export default Navbar;