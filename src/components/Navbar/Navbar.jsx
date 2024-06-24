import CartWidget from '../../../CardWidget/CardWidget';
import './Navbar.css'

const Navbar = () => {
    return <div className='bar'>
      <h2>logo</h2>
    <ul>
      <li>Inicio</li>
      <li>Productos</li>
      <li>Informacion</li>
    </ul>
   < CartWidget />
    </div>
    
    
    

}; 

export default Navbar;