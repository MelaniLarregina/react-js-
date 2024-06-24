import './Navbar.css'
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
    return <div className='bar'>
      <h2>logo</h2>
    <ul>
      <li>Inicio</li>
      <li>Productos</li>
      <li>Informacion</li>
    </ul>
    <RiShoppingCartLine color='black' size={40}/>
    <span className='span'>0</span>
    </div>
   
    
    

}; 

export default Navbar;